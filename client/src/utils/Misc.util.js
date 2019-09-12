import uuidv5 from 'uuid/v5'

import { Util } from '../shlakyjs'

class MiscUtil extends Util {
  randomId = () => uuidv5('dialogy.com', uuidv5.DNS)
}

export default MiscUtil
