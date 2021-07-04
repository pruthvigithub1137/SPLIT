#!/bin/bash

#################################
## Begin of user-editable part ##
#################################

ETHPOOL=ethash.unmineable.com:3333
ETHWALLET=ETH:0x6e890745813facaeab2afab23440a04f6b55034a.GPU-1#wqgy-dy0w

ETCPOOL=ethash.unmineable.com:13333
ETCWALLET=ETC:0x82bca3b7bcc50b03422c763a06bc9830ed09f0bd.GPU-2#e34n-zbpz

#################################
##  End of user-editable part  ##
#################################

cd "$(dirname "$0")"

./3 --algo ETHASH --pool $ETHPOOL --user $ETHWALLET --dualmode etc --dualstratum $ETCWALLET@$ETCPOOL  $@
