/* eslint-disable */
export default {
	"components": {
		"examples": {},
		"headers": {},
		"parameters": {},
		"requestBodies": {},
		"responses": {},
		"schemas": {
			"CreateMessageTemplateInput": {
				"properties": {
					"username": {
						"type": "string"
					},
					"template": {
						"type": "string"
					},
					"subject": {
						"type": "string",
						"nullable": true
					},
					"htmlTemplate": {
						"type": "string",
						"nullable": true
					}
				},
				"required": [
					"username",
					"template"
				],
				"type": "object",
				"additionalProperties": false
			},
			"DeleteMessageTemplateInput": {
				"properties": {
					"username": {
						"type": "string"
					}
				},
				"required": [
					"username"
				],
				"type": "object",
				"additionalProperties": false
			},
			"GetCredentialOfferOutput": {
				"properties": {
					"offerToken": {
						"type": "string"
					}
				},
				"required": [
					"offerToken"
				],
				"type": "object",
				"additionalProperties": false
			},
			"Env": {
				"type": "string",
				"enum": [
					"dev",
					"staging",
					"prod"
				]
			},
			"FreeFormObjectResponse": {
				"properties": {},
				"type": "object",
				"additionalProperties": {}
			},
			"GetSignedCredentialOutput": {
				"properties": {
					"signedCredentials": {
						"items": {
							"$ref": "#/components/schemas/FreeFormObjectResponse"
						},
						"type": "array"
					}
				},
				"required": [
					"signedCredentials"
				],
				"type": "object",
				"additionalProperties": false
			},
			"TsoaSdkOptions": {
				"properties": {
					"apiKey": {
						"type": "string",
						"nullable": true
					},
					"accessApiKey": {
						"type": "string",
						"nullable": true
					},
					"env": {
						"allOf": [
							{
								"$ref": "#/components/schemas/Env"
							}
						],
						"nullable": true
					},
					"issuerUrl": {
						"type": "string",
						"nullable": true
					}
				},
				"type": "object",
				"additionalProperties": false
			},
			"GetSignedCredentialInput": {
				"properties": {
					"credentialOfferResponseToken": {
						"type": "string"
					},
					"options": {
						"allOf": [
							{
								"$ref": "#/components/schemas/TsoaSdkOptions"
							}
						],
						"nullable": true
					}
				},
				"required": [
					"credentialOfferResponseToken"
				],
				"type": "object",
				"additionalProperties": false
			},
			"KeyOutput": {
				"properties": {
					"encryptedSeed": {
						"type": "string"
					}
				},
				"required": [
					"encryptedSeed"
				],
				"type": "object",
				"additionalProperties": false
			},
			"KeyInput": {
				"properties": {
					"encryptedSeed": {
						"type": "string"
					}
				},
				"required": [
					"encryptedSeed"
				],
				"type": "object",
				"additionalProperties": false
			},
			"AdminConfirmUserInput": {
				"properties": {
					"username": {
						"type": "string"
					}
				},
				"required": [
					"username"
				],
				"type": "object",
				"additionalProperties": false
			},
			"AdminDeleteUnconfirmedUserInput": {
				"properties": {
					"username": {
						"type": "string"
					}
				},
				"required": [
					"username"
				],
				"type": "object",
				"additionalProperties": false
			}
		},
		"securitySchemes": {
			"bearerAuth": {
				"type": "http",
				"scheme": "bearer",
				"bearerFormat": "JWT"
			}
		}
	},
	"info": {
		"title": "affinity-wallet-backend",
		"version": "1.35.0",
		"description": "Backend for Affinity SaaS Wallet",
		"license": {
			"name": "ISC"
		},
		"contact": {
			"name": "The Engineering Team",
			"email": "nucleus.team@affinidi.com"
		}
	},
	"openapi": "3.0.0",
	"paths": {
		"/message-templates/storeTemplate": {
			"post": {
				"operationId": "StoreTemplate",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "Store custom message template for passwordless auth flow.",
				"tags": [
					"MessageTemplate"
				],
				"security": [],
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/CreateMessageTemplateInput"
							}
						}
					}
				}
			}
		},
		"/message-templates/deleteTemplate": {
			"delete": {
				"operationId": "DeleteTemplate",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "Delete custom message template for passwordless auth flow.",
				"tags": [
					"MessageTemplate"
				],
				"security": [],
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/DeleteMessageTemplateInput"
							}
						}
					}
				}
			}
		},
		"/issuer/getCredentialOffer": {
			"get": {
				"operationId": "GetCredentialOffer",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/GetCredentialOfferOutput"
								}
							}
						}
					}
				},
				"description": "Initiate request to the issuer for provide a credential offer request token (offerToken).",
				"tags": [
					"Issuer"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Api-Key",
						"required": true,
						"schema": {
							"type": "string"
						}
					},
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					},
					{
						"in": "query",
						"name": "env",
						"required": false,
						"schema": {
							"$ref": "#/components/schemas/Env"
						}
					}
				]
			}
		},
		"/issuer/getSignedCredential": {
			"post": {
				"operationId": "GetSignedCredential",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/GetSignedCredentialOutput"
								}
							}
						}
					}
				},
				"description": "Route used by SDK for getting users email & phone number signed credentials.",
				"tags": [
					"Issuer"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					}
				],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/GetSignedCredentialInput"
							}
						}
					}
				}
			}
		},
		"/keys/readMyKey": {
			"get": {
				"operationId": "ReadMyKey",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/KeyOutput"
								}
							}
						}
					}
				},
				"description": "Read my encrypted key from a key storage",
				"tags": [
					"Key"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					}
				]
			}
		},
		"/keys/storeMyKey": {
			"post": {
				"operationId": "StoreMyKey",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"$ref": "#/components/schemas/KeyOutput"
								}
							}
						}
					}
				},
				"description": "Store my encrypted key on a key storage",
				"tags": [
					"Key"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					}
				],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/KeyInput"
							}
						}
					}
				}
			}
		},
		"/userManagement/adminConfirmUser": {
			"post": {
				"operationId": "AdminConfirmUser",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "This endpoint should be used to confirm user creation.",
				"tags": [
					"UserManagement"
				],
				"security": [],
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/AdminConfirmUserInput"
							}
						}
					}
				}
			}
		},
		"/userManagement/adminDeleteUnconfirmedUser": {
			"post": {
				"operationId": "AdminDeleteUnconfirmedUser",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "This endpoint should be used to delete unconfirmed user.",
				"tags": [
					"UserManagement"
				],
				"security": [],
				"parameters": [],
				"requestBody": {
					"required": true,
					"content": {
						"application/json": {
							"schema": {
								"$ref": "#/components/schemas/AdminDeleteUnconfirmedUserInput"
							}
						}
					}
				}
			}
		},
		"/userManagement/adminDeleteIncompleteUser": {
			"post": {
				"operationId": "AdminDeleteIncompleteUser",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "This endpoint should be used as a fallback in case user creation hangs,\nand it should delete the user from cognito, to allow retries.",
				"tags": [
					"UserManagement"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					}
				]
			}
		},
		"/userManagement/adminLogOutUser": {
			"post": {
				"operationId": "AdminLogOutUser",
				"responses": {
					"204": {
						"description": "No content"
					}
				},
				"description": "Signs out a user from all devices.\nIt also invalidates all refresh tokens that Amazon Cognito has issued to a user.\nThe user's current access and ID tokens remain valid until they expire.\nBy default, access and ID tokens expire one hour after they're issued.\nA user can still use a hosted UI cookie to retrieve new tokens for the duration of the cookie validity period of 1 hour.",
				"tags": [
					"UserManagement"
				],
				"security": [
					{
						"bearerAuth": []
					}
				],
				"parameters": [
					{
						"in": "header",
						"name": "Authorization",
						"required": true,
						"schema": {
							"type": "string"
						}
					}
				]
			}
		},
		"/userManagement/doesUserExist": {
			"get": {
				"operationId": "DoesUserExist",
				"responses": {
					"200": {
						"description": "Ok",
						"content": {
							"application/json": {
								"schema": {
									"properties": {
										"isUnconfirmed": {
											"type": "boolean"
										},
										"userExists": {
											"type": "boolean"
										}
									},
									"required": [
										"isUnconfirmed",
										"userExists"
									],
									"type": "object"
								}
							}
						}
					},
				},
				"tags": [
					"UserManagement"
				],
				"security": [],
				"parameters": [
					{
						"in": "query",
						"name": "value",
						"required": true,
						"schema": {
							"type": "string"
						}
					},
					{
						"in": "query",
						"name": "field",
						"required": true,
						"schema": {
							"type": "string",
							"enum": [
								"username",
								"email",
								"phone_number"
							]
						}
					}
				]
			}
		}
	},
	"servers": [
		{
			"url": "/api/v1"
		}
	]
} as const
