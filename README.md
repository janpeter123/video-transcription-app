# Video Transcription Application

`Author: Jan Peter Merkel `


# Application Demo



https://user-images.githubusercontent.com/22799983/231574932-500bd5f8-4ea3-4022-a5b5-73ad9ae2c51f.mp4



# Content:
 [ TO DO . . .]

### Minimum requirements:
To run this application you should have the following dependencies on your machine:
 - [Node](https://nodejs.org/en/download)
 - [Docker](https://www.docker.com/products/docker-desktop/)

 **Note:** Ensure npm is also instaled and available on your PATH.



# 1. Scope:
The scope of this project is to create an application capable of transcribing videos from youtube and get the categories cited on the video.

> **Note: The audio transcription API only processes videos that are 5 minutes or less**


# 2. Application Architecture

![Application Architecture](./documents/arquitetura.png)


## 2.1 Architecture explanation

`mDNSResponder` is the local DNS server responsible for translating the application url to an IP.

Afterwards the `Front End React application` will send Youtube URL'S to the rest API.

The `Rest API` will download the audio from the youtube video, then it will send to the `Watson Speech to Text API` and this API will extract the transcript from the audio file.

The transcript will be sent to `Watson Natural Language Understanding` to get the main categories cited on the video.

The video transcription and the categories identified by Watson Natural Language Understanding will be sent to the  `Front End React application`.

# 2. Folder Structure

```
TO DO...
```


# 3. Available Routes

## 3.1 `[POST]` - Routes
---

### 1. `/video`
Transcribes the video and returns the text transcript and the main categories.

# 4. Development Environment Setup

TO DO...

## 4.2 Building the Containers Locally






# 5. Application Deploy
TO DO...

# 6. Refferences
TO DO...

