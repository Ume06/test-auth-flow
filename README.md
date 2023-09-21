# TypeScript

A base TypeScript project to fork off when starting a new project.

## Debug Sessions

VSCode profiles have already been setup to let you start debugging straight away. There are two profiles

- Launch Typescript
- Attach TypeScript (Cold Reload)

**Launch Typescript** will launch the application as a debug session.
**Attach Typescript (Cold Reload)** is used to attach the debugger to an existing nodemon execution that provides cold realoding of your program on code changes.

To start a Cold Reload debug session, start by calling `npm run watch:debug` in your terminal and then start the `Attach Typescript (Cold Reload)` profile from VS Code.
