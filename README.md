# Node-Express-Typescript

## Getting started

### Step 1: Set Up Environment Variables

- Copy the .env.template file to a new file named .env
- You can use the following command: `cp .env.template .env`
- Ensure that the .env file contains the required environment variables as defined in .env.template

### Step 2: Available Scripts

Below are Scripts that can be ran and found in package.json file

- Development Mode: `npm/yarn run dev`
- Build Project: `npm/yarn run build`
- Production Mode: `npm/yarn run start` or `npm/yarn run docker:start`

## Source Folder Structure

```
.
├── common
│   ├── middleware
│   │   ├── compressFilter.ts
│   │   ├── errorHandler.ts
│   │   ├── server.ts
│   │   ├── rateLimiter.ts
│   │   └── requestLogger.ts
│   ├── models
│   │   └── serviceResponse.ts
│   └── utils
│       ├── compressFilter.ts
│       ├── envConfig.ts
│       └── responseHandler.ts
├── server.ts
├── modules
│   ├── healthCheck
│   │   ├── healthCheckController.ts
│   │   ├── healthCheckRoutes.ts
│   │   └── tests
│   │       └── healthCheckRoutes.test.ts
│   └── user
│       ├── tests
│       │   └── todoRoutes.test.ts
│       ├── todoController.ts
│       ├── todoModel.ts
│       ├── todoRepository.ts
│       ├── authRoutes.ts
│       └── todoService.ts
└── app.ts

10 directories, 19 files
```
