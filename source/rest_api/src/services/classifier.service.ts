import { nluResults } from './../interfaces/nluResults.interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

import * as fs from 'fs';
import axios from 'axios';
import * as path from 'path';

export class ClassifierService{
    private NLU = new NaturalLanguageUnderstandingV1({
        version: '2022-04-07',
        authenticator: new IamAuthenticator({
          apikey: process.env.NLU_API_KEY,
        }),
        serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com',
      });
      
    async categorize(text :string){

        const analyzeParams = {
            'text': text,
            'features': {
              'categories': {
                'limit': 3
              },
            },
            'language':'pt'
          };
        
          try{
            
            const analysisResults = await this.NLU.analyze(analyzeParams);
            const results = await this.formatCategories(analysisResults.result.categories);
            return results
          }catch(err){
            console.log(err)
          }
        
    }

    async formatCategories(listOfCategories :nluResults[]){
        let labels = [];

        //Iterating over NLU results
        listOfCategories.map((category :nluResults)=>{

            //splitting categories
            const categories = category.label.split("/")

            //Iterating over new array of words
            categories.map((categoryLabel :string)=>{
                
                //Removing empty elements
                if(categoryLabel!=''){
                    labels.push(categoryLabel);
                }
            })
        })

        //Creating a new array with unique elements
        labels = [...new Set(labels)];
        return labels;
    }
}