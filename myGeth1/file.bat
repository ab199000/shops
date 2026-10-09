start npm start
@REM geth --datadir ./ init genesis.json

start geth --datadir ./ --networkid 1547 --http --http.corsdomain "*" --allow-insecure-unlock --ws.api="db,eth,net,web3,personal,web3"

geth attach --exec miner.start(2)

geth attach --exec personal.unlockAccount(eth.accounts[0],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[1],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[2],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[3],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[4],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[5],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[6],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[7],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[8],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)
geth attach --exec personal.unlockAccount(eth.accounts[9],'c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6',0)


timeout /t 10
geth attach \\.\pipe\geth.ipc
















