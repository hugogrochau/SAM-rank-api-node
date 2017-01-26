define({ "api": [
  {
    "type": "post",
    "url": "/player/add",
    "title": "Add Player",
    "name": "AddPlayer",
    "group": "Player",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"steam\"",
              "\"ps4\"",
              "\"xbox\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Player's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "player",
            "description": "<p>Player object</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DuplicatePlayer",
            "description": "<p>Player is already added</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "DuplicatePlayer Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"status\": \"error\",\n  \"message\": \"Player already added\",\n  \"code\": \"DuplicatePlayer\"\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        },
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/player.js",
    "groupTitle": "Player"
  },
  {
    "type": "get",
    "url": "/player/:platform/:id/delete",
    "title": "Delete Player",
    "name": "DeletePlayer",
    "group": "Player",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"steam\"",
              "\"ps4\"",
              "\"xbox\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Player's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n  \"data\": \"Player deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/player.js",
    "groupTitle": "Player",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlayerNotFound",
            "description": "<p>Player could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        },
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PlayerNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Player not found\",\n  \"code\": \"PlayerNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/player/:platform/:id",
    "title": "Get Player information",
    "name": "GetPlayer",
    "group": "Player",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"steam\"",
              "\"ps4\"",
              "\"xbox\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Player's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Player data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"type\": \"players\",\n    \"id\": \"76561198013819031\",\n    \"attributes\": {\n      \"platform\": 0,\n      \"1v1\": 1373,\n      \"1v1_games_played\": 180,\n      \"2v2\": 1409,\n      \"2v2_games_played\": 564,\n      \"3v3\": 1150,\n      \"3v3_games_played\": 520,\n      \"3v3s\": 1110,\n      \"3v3s_games_played\": 67,\n      \"last_update\": \"2017-01-15T19:59:29.858Z\",\n      \"1v1_tier\": 15,\n      \"2v2_tier\": 15,\n      \"3v3_tier\": 15,\n      \"3v3s_tier\": 15,\n      \"1v1_division\": 1,\n      \"2v2_division\": 1,\n      \"3v3_division\": 1,\n      \"3v3s_division\": 3,\n      \"name\": \"bd | Freedom\",\n      \"created_at\": null\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/player.js",
    "groupTitle": "Player",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlayerNotFound",
            "description": "<p>Player could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PlayerNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Player not found\",\n  \"code\": \"PlayerNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/player/",
    "title": "Get all Players",
    "name": "GetPlayers",
    "group": "Player",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of Players</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/player.js",
    "groupTitle": "Player",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/player/:platform/:id/update",
    "title": "Update Player information",
    "name": "UpdatePlayer",
    "group": "Player",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"name\""
            ],
            "optional": false,
            "field": "platform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "1v1",
            "description": "<p>Player's 1v1 rank.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "2v2",
            "description": "<p>Player's 2v2 rank.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "3v3",
            "description": "<p>Player's 3v3 rank.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "3v3s",
            "description": "<p>Player's 3v3s rank.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "player",
            "description": "<p>Player object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/player.js",
    "groupTitle": "Player",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Not authorized to use resource</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlayerNotFound",
            "description": "<p>Player could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ExternalAPI Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Not authorized to use resource\",\n  \"code\": \"Unauthorized\"\n}",
          "type": "json"
        },
        {
          "title": "PlayerNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Player not found\",\n  \"code\": \"PlayerNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/:id/add-player/:player-platform/:player-id",
    "title": "Add Player to Team",
    "name": "AddPlayerToTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Team's unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"steam\"",
              "\"ps4\"",
              "\"xbox\""
            ],
            "optional": false,
            "field": "playerPlatform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerId",
            "description": "<p>Player's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "player",
            "description": "<p>Player object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlayerNotFound",
            "description": "<p>Player could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TeamNotFound",
            "description": "<p>Team could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PlayerNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Player not found\",\n  \"code\": \"PlayerNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "TeamNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Team not found\",\n  \"code\": \"TeamNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/team/add",
    "title": "Add Team",
    "name": "AddTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Team name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "team",
            "description": "<p>Team object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/:id/delete",
    "title": "Delete team",
    "name": "DeleteTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Team's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>Success message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TeamNotFound",
            "description": "<p>Team could not be found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        },
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "TeamNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Team not found\",\n  \"code\": \"TeamNotFound\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/:id",
    "title": "Get team information",
    "name": "GetTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Team's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Team data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"id\": \"1\",\n    \"attributes\": {\n      \"name\": \"Black Dragons\",\n      \"image_url\": \"http://d31qciy1ywu4xk.cloudfront.net/bd-logo-white-bg.png\",\n      \"created_at\": \"2017-01-15T19:59:29.858Z\",\n      \"last_update\": \"2017-01-15T19:59:29.858Z\",\n      \"players\": []\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TeamNotFound",
            "description": "<p>Team could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "TeamNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Team not found\",\n  \"code\": \"TeamNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/",
    "title": "Get all Teams",
    "name": "GetTeams",
    "group": "Team",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of Teams</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/team/:id/remove-player/:player-platform/:player-id",
    "title": "Remove Player from Team",
    "name": "RemovePlayerFromTeam",
    "group": "Team",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Team's unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"steam\"",
              "\"ps4\"",
              "\"xbox\""
            ],
            "optional": false,
            "field": "playerPlatform",
            "description": "<p>Player's platform</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "playerId",
            "description": "<p>Player's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "player",
            "description": "<p>Player object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/team.js",
    "groupTitle": "Team",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Input",
            "description": "<p>Input is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PlayerNotFound",
            "description": "<p>Player could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TeamNotFound",
            "description": "<p>Team could not be found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Database",
            "description": "<p>Error with the application database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n  \"message\": \"Input error\",\n  \"code\": \"Input\",\n  \"data\": {\n    \"playerId\": {\n      \"param\": \"playerId\",\n      \"msg\": \"Invalid Steam 64 ID\",\n      \"value\": \"banana\"\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "PlayerNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Player not found\",\n  \"code\": \"PlayerNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "TeamNotFound Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n  \"message\": \"Team not found\",\n  \"code\": \"TeamNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Database Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"status\": \"error\",\n  \"message\": \"Database error\",\n  \"code\": \"Database\",\n  \"data\": \"DATABASE ERROR DATA\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
