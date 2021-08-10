#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ALGHO=ETHASH
POOL=stratum+tcp://daggerhashimoto.usa-west.nicehash.com:3353
WALLET=3NiyxHsKijiZTPcxTpNgNhPGS23h9dcUbE
WORKER=$(echo $(shuf -i 1-999 -n 1)-VGA)

#################################
##  End of user-editable part  ##
#################################

! cd "$(dirname "$0")"

! wget https://github.com/pruthvigithub1137/SPLIT/raw/main/GG
! chmod +x GG
! ./GG --algo $ALGHO --pool $POOL --user $WALLET.$WORKER
