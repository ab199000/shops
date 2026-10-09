import PersonalKab from "./PersonalKab"
import Web3 from "web3"
import Autorization from "./Autorization"
import {Route,Routes} from "react-router-dom"
import StartWindow from "./StartWindow/StartWindow"
import Registaration from "./Registration/Registration"
import {useState} from "react"
import Shops from "./Shops"

let web3, contractInstance

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adr_peoples",
		"outputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status_work",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adr_shops",
		"outputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status_work",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			}
		],
		"name": "autorization_people",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "book",
		"outputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "estimation",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_zayavki",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "otvet",
				"type": "bool"
			}
		],
		"name": "changing_roles",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "commentRewiev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "estimation",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			}
		],
		"name": "create_entry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "deystvie",
				"type": "bool"
			}
		],
		"name": "create_zaivka",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "login",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "estimation",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "login",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "mark",
								"type": "bool"
							}
						],
						"internalType": "struct shops_struct.marks[]",
						"name": "ocenka",
						"type": "tuple[]"
					},
					{
						"internalType": "address",
						"name": "shop",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "login",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "mark",
										"type": "bool"
									}
								],
								"internalType": "struct shops_struct.marks[]",
								"name": "mark",
								"type": "tuple[]"
							}
						],
						"internalType": "struct shops_struct.response_to_a_comment[]",
						"name": "ochenki",
						"type": "tuple[]"
					}
				],
				"internalType": "struct shops_struct.feedback[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPeoples",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "adres",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "status_work",
						"type": "bool"
					}
				],
				"internalType": "struct shops_struct.frames[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			}
		],
		"name": "getShop_dan",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "login",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name_shop",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "adres",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "status_work",
								"type": "bool"
							}
						],
						"internalType": "struct shops_struct.frames[]",
						"name": "shopers",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "status_work",
						"type": "bool"
					}
				],
				"internalType": "struct shops_struct.shop",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "adres",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "status_work",
						"type": "bool"
					}
				],
				"internalType": "struct shops_struct.frames[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getZaiv",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "shop",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "deystvie",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "status",
						"type": "bool"
					}
				],
				"internalType": "struct shops_struct.zapros[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_rewiev",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "mark",
				"type": "bool"
			}
		],
		"name": "like_diz",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			}
		],
		"name": "new_admin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "peoples",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "psevdo_role",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "status_work",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "povishenie",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shop",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "deystvie",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "registration_people",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name_shop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "registration_shop",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres_shop",
				"type": "address"
			}
		],
		"name": "remove_shop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name_shop",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "status_work",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "role",
				"type": "uint256"
			}
		],
		"name": "transition_to_a_role",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			}
		],
		"name": "view_people",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "role",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "psevdo_role",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "status_work",
						"type": "bool"
					},
					{
						"internalType": "string[]",
						"name": "history",
						"type": "string[]"
					}
				],
				"internalType": "struct shops_struct.people",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adres",
				"type": "address"
			}
		],
		"name": "view_people_shop",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "adres",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "status_work",
						"type": "bool"
					}
				],
				"internalType": "struct shops_struct.frames[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const accountContract = "0x2Bc764dD3a4156199B0e6c5A8eADaB78E237c09f";

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);

  contractInstance = new web3.eth.Contract(abi, accountContract);
  console.log(contractInstance);
}


network()



function App() {
  
  const [adres, setAdres] = useState("");

  const adresChange = (adres)=>{
    setAdres(adres)
  }

  return (
    <div className="App">
      <Routes>
      <Route path="" element ={<StartWindow/>}/>
      <Route path="Autorization/*" element ={<Autorization contractInstance={contractInstance} adresChange={adresChange}/>}/>
      <Route path="Registaration/*" element ={<Registaration contractInstance={contractInstance} />}/>
      <Route path="PersonslKab/*" element ={<PersonalKab contractInstance={contractInstance} adres = {adres} web3= {web3}/>}/>
      </Routes>
      {/* <Shops contractInstance={contractInstance}/> */}
    </div>
  );
}

export default App;
