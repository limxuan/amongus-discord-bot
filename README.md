<p align="center">
  <img width="256" height="256" src="https://cdn.discordapp.com/icons/753867179048304750/a_fd5ccd63f6dddf6cc905623d54cfa0f6.png?size=512">
</p>
  
<h3 align="center">Among Us Discord BOT!</h3>

<div align="center">

</div>

---

<p align="center"> Among us discord bot, best bot to organize your games
    <br> 
</p>


## 📝 Table of Contents 

+ [Watch my youtube video on how to set it up by clicking here](https://youtu.be/giQBUqOoJlI)
+ [Setting up the bot](https://github.com/reconlx/amongus-discord-bot/blob/main/README.md#-setting-up-the-bot)
+ [Commands](https://github.com/reconlx/amongus-discord-bot/blob/main/README.md#-commands)
+ [License](https://github.com/reconlx/amongus-discord-bot/blob/main/LICENCE)
+ Follow my [github](https://github.com/reconlx) for more cool content

## 🛠 Setting up the bot 

### Option 1 : Watching youtube tutorial
- Youtube Link : https://youtu.be/giQBUqOoJlI<br />

### Option 2 : Setting up individually with docs.

### (Installation)
[1.0] Installing Node.js<br>
Click [here](https://nodejs.org/en/) to install node.js, it is required.<br>

[1.1] Installing Visual Studio Code<br>
Click [here](https://code.visualstudio.com/) to install visual studio code, it is required to modify your current code.

### (Initialising the bot)
[2.0] Making an application <br>
Click [here](https://discord.com/developers) to open discord developer portal. After that create an application

[2.0.1] Making a bot <br>
When you have already created an application, create a bot. After that get the bot's token. Remmember don't share the token with anyone.
<p align="center">
  <img src="https://cdn.discordapp.com/attachments/728829095013515294/734288747050303519/Untitled_Artwork.jpg?size=512">
</p>

[2.1] Editing config.json <br>
Open the downloaded repo folder with visual studio code and locate **config.json**, after that replace **your bot token** with your bot's token. Besides that you can also change the prefix of the bot. Default prefix is set to `au!`

[2.2] Installing dependancies <br>
The only dependancy you need in this is ascii-table, simply run `npm i ascii table` in the terminal.

[2.3] Starting up the bot <br>
Start the bot up by running the command `node index.js` in the terminal. For more information please [click here](https://github.com/reconlx/discord.js-tutorials/tree/recon-handler#command-handler).

### (The bot is up and running)
Congrats if the bot is up and running if its not and you face error you can get support by joining our discord server. [Click here to join](https://discord.gg/xCCpfth).

## 📜 Commands
**Note :** If you have changed the prefix of the bot, replace `au!` with the changed prefix!
```js
// Sets up among us commands. (necessary)
au!setup

//Resets among us game! Used when a game has ended.
au!reset

//Command is used when the game has started and it will deafen users in the call.
au!start

//Command is used when voting session starts.
au!vote

//Command is used for a dead player.
au!dead [@user]

//Command is used to revive a player.
au!revive [@user]
```
## 📄 License
This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/reconlx/amongus-discord-bot/blob/main/LICENCE) file for details.

## 🎫 Additional Comments
Have any questions about the bot, errors and more join the [support server](https://discord.gg/xCCpfth)! <br>
Too hard for you? Just invite my bot, online 24/7 for more information [click here](https://bit.ly/zexdiscordbot)!

©[reconlx](https://github.com/reconlx)
