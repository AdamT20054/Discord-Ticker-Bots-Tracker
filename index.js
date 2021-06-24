const Discord = require('discord.js');
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

client1.once('ready', () => {
    console.log('Bot 1 ready.');
});

client2.once('ready', () => {
    console.log('Bot 2 ready.');
});

client3.once('ready', () => {
    console.log('Bot 3 ready.');
});
 
client4.once('ready', () => {
    console.log('Bot 4 ready.');
});
 
client5.once('ready', () => {
    console.log('Bot 5 ready.');
});
 
client6.once('ready', () => {
    console.log('Bot 6 ready.');
});
 
client7.once('ready', () => {
    console.log('Bot 7 ready.');
});
 
client8.once('ready', () => {
    console.log('Bot 8 ready.');
});
 
client9.once('ready', () => {
    console.log('Bot 9 ready.');
});
 
client10.once('ready', () => {
    console.log('Bot 10 ready.');
});
 
client11.once('ready', () => {
    console.log('Bot 11 ready.');
});
 
client12.once('ready', () => {
    console.log('Bot 12 ready.');
});
 
client13.once('ready', () => {
    console.log('Bot 13 ready.');
});
 
client14.once('ready', () => {
    console.log('Bot 14 ready.');
});

 
const Adam = '369203023760719892'



client1.on('message', message => {
    if (message.content === '!servers btc' && message.author.id === Adam) {
        client1.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});

client2.on('message', message => {
    if (message.content === '!servers eth' && message.author.id === Adam) {
        client2.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
 
client3.on('message', message => {
    if (message.content === '!servers ltc' && message.author.id === Adam) {
        client3.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
 
 
client4.on('message', message => {
    if (message.content === '!servers bnb' && message.author.id === Adam) {
        client4.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client5.on('message', message => {
    if (message.content === '!servers dash' && message.author.id === Adam) {
        client5.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
 
client6.on('message', message => {
    if (message.content === '!servers doge' && message.author.id === Adam) {
        client6.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client7.on('message', message => {
    if (message.content === '!servers cake' && message.author.id === Adam) {
        client7.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client8.on('message', message => {
    if (message.content === '!servers ada' && message.author.id === Adam) {
        client8.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client9.on('message', message => {
    if (message.content === '!servers matic' && message.author.id === Adam) {
        client9.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client10.on('message', message => {
    if (message.content === '!servers dot' && message.author.id === Adam) {
        client10.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client11.on('message', message => {
    if (message.content === '!servers algo' && message.author.id === Adam) {
        client11.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client12.on('message', message => {
    if (message.content === '!servers xmr' && message.author.id === Adam) {
        client12.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client13.on('message', message => {
    if (message.content === '!servers xrp' && message.author.id === Adam) {
        client13.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
client14.on('message', message => {
    if (message.content === '!servers uni' && message.author.id === Adam) {
        client14.guilds.cache.forEach((guild) => {
            //console.log(`***${guild.name}***  has a total of ***${guild.memberCount}***  members.`)
            message.channel.send(
                `***${guild.name}***  has a total of ***${guild.memberCount}***  members. *Invite:*` //*${invite}*`
            )
        })
    }
});
  
 
 
client1.login(process.env.btc);
wait(2000);
client2.login(process.env.eth);
wait(2000);
client3.login(process.env.ltc);
wait(2000);
client4.login(process.env.bnb);
wait(2000);
client5.login(process.env.dash);
wait(2000);
client6.login(process.env.doge);
wait(2000);
client7.login(process.env.cake);
wait(2000);
client8.login(process.env.ada);
wait(2000);
client9.login(process.env.matic);
wait(2000);
client10.login(process.env.dot);
wait(2000);
client11.login(process.env.algo);
wait(2000);
client12.login(process.env.xmr);
wait(2000);
client13.login(process.env.xrp);
wait(2000);
client14.login(process.env.uni);
wait(2000)