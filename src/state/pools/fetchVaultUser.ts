import BigNumber from 'bignumber.js'
import { getCakeVaultContract } from 'utils/contractHelpers'

const cakeVaultContract = getCakeVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await cakeVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      xhashAtLastUserAction: new BigNumber(userContractResponse.xhashAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      xhashAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
