{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red47\green50\blue58;\red239\green244\blue246;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs36 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var querystring = require('querystring');\
var https = require('https');\
\
var host = 'www.thegamecrafter.com';\
var username = 'JonBob';\
var password = '*****';\
var apiKey = '*****';\
var sessionId = null;\
var deckId = '68DC5A20-EE4F-11E2-A00C-0858C0D5C2ED';\
\
function performRequest(endpoint, method, data, success) \{\
  var dataString = JSON.stringify(data);\
  var headers = \{\};\
  \
  if (method == 'GET') \{\
    endpoint += '?' + querystring.stringify(data);\
  \}\
  else \{\
    headers = \{\
      'Content-Type': 'application/json',\
      'Content-Length': dataString.length\
    \};\
  \}\
  var options = \{\
    host: host,\
    path: endpoint,\
    method: method,\
    headers: headers\
  \};\
\
  var req = https.request(options, function(res) \{\
    res.setEncoding('utf-8');\
\
    var responseString = '';\
\
    res.on('data', function(data) \{\
      responseString += data;\
    \});\
\
    res.on('end', function() \{\
      console.log(responseString);\
      var responseObject = JSON.parse(responseString);\
      success(responseObject);\
    \});\
  \});\
\
  req.write(dataString);\
  req.end();\
\}\
}