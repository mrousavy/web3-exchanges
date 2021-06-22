import curve from './exchanges/curve'
import pancakeswap from './exchanges/pancakeswap'
import sushiswap from './exchanges/sushiswap'
import uniswap_v2 from './exchanges/uniswap_v2'
import uniswap_v3 from './exchanges/uniswap_v3'

let all = [curve, pancakeswap, sushiswap, uniswap_v2, uniswap_v3];

let DEX = {

  all: all,

  findByName: function(name){
    return all.find((dex)=>{ 
      return(
        dex.name == name ||
          dex.alternativeNames.includes(name)
      )
    })
  }
}

export { DEX }
