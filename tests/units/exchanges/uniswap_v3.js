import { DEX } from 'dist/cjs/index.js';

describe('uniswap_v3', () => {
  
  it('provides basic structured data', () => {
    let dex = DEX.findByName('uniswap_v3');
    expect(dex.name).toEqual('uniswap_v3');
    expect(dex.alternativeNames).toEqual(['uniswap']);
    expect(dex.label).toEqual('Uniswap v3');
    expect(dex.logo).toEqual('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAALVBMVEVHcEz/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHr/AHoZcglmAAAADnRSTlMACBMiNEtieI+kuc7j9HuCgRkAABrlSURBVHja7F37b1vVHT+2rx9xQIqoxKMpkyUGY22KLCp+GE0rbxLV2i2RKagIBlbUVUITkpWNINptRN1Yi7pqVjeNdUPDSkFj3UMWXSugW7FKCusAYbG1EhA0a92axEns8zfs3uvHPa97fa+vJX+V7/38FD9y7fO938fn+zjHJECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIIAJjSBHeIogxy6CHDH0KnCEIEcyS3AjfI4gx3ia4Eb0EkGOH6YIbgz9heBG6K8jBDfGTxDc0FYIcuQPE9xILBPkKGFPicYWCW5E/p0huJG7SnAjXseeEhXnCW6MriFPicKVUwQ3JlYJbsQo9pSoUCO4kaTTBDVC5SWCGzso8hZBlGLnw/kG8pQoQZG3CEKlOnI+PEaRtwi06iryFkEOOx+OU+x8uIidD49S5Hw4UsHOhyco8hZBjGLnwwXsfDhJkbcIwhXsfHgHXcPNh6OUzhHUmKXIR2aGKMU9MhMqU+QjM2OU4h6Z0arY+XAeOx9OUOwtghJ2PjxKKe6RmUiVIh+ZyVGKe2QmRrHz4QJ2PryRIufD4Qp2PjxBkfNhvS6CvEUwi50PD1HkfFiviyBvEYxT5HxY093gGYIZeUpxj5DrdRHcIzOhEkU+MqOXh3GPzOjlYeQjMznsfDhOsfPhIkXeIhilyPlwRK+L4B4hn8TOh2O6AHCPkBew8+GNFDkfDlew8+EJipwPRyl2PjyLnQ8PUeR8OFTGzofHKXI+rFHsfDiPnQ8nKHI+HCph58NjFDkf1qrY+XCuCx/e8xFtfHj+hQPrK1iG2fJwFz5836G3jbc0Th8g6wcx5u9idz686zg1sDBD1gvC01x5uDsfvutlUwT/WDe54wxbHnbFh7+uv01/30/I+sBm5u9Jd3xYayrBa+uDN8an2fKwOz4cesqUwOX+SKA/V+kZobPMg4JbPvyYKYFP+vHdI4P2Jk9x5WG3fHhP3ySQGDSvGJ4WysN02r0E3iO+sZkMGNoVrjxsy4ejJ/dyjx83JfAq8YsXyKDxklgeplmbBtqbGdZ5PGfSwu/69UGDr8XunBLKw/Sq3SDF2tOs9ypR46mMTyp6kQwaiStcediODyek4B+rmo7Q52kWg9/HH14Qy8MWH+ZEY+Iy47S398EN3ANg187sFHe4hA0fTurPi6GvYOqLr0CeB7BnZdO85AbPKMIlbeE95s2mESz7mlAaNA8ylrHC3ZImH7YXAP2RaASv+PjwCoR+VDkrObsTtgLgBuxDRfOJdO9EmELYsDE5L5aHac1BAPRdLjj66qtG6aCZsIGhmlQeptMOAqhneIvxsfsuDkIAkWpGLA/TJQcB0Et984NDIARACmdENyjz4aS1fu4Ypm+az/QazYdhCGCsJnO+q9K9YnCYL6T1vg37RhBOUE90uGBUUvHhBCuARa6zbuDnvX3yFyiEMKgHwtfZR1ssQ+f8vYX6CKcCvXeWdwIZTcot805RwYdjlMW0pAKneovAQLZvJxtpTh4KPhzlBPAv0h8VyAHpx2p0jld3eUkRTgDL/Ol87ocLtgm5EJQzHIpL/EPFkqqSE7CYg/tAcMv5/VwmCuVcvx28DYxSmQ+XORWYkkzG5b28ufJWlk2oB18Rain9HL+JQubDRU4Ac7KDXHYZc8uNF1PWRa8REAhVlgTvLPHhPCeA//FU0ktGEC3Rhf0dAVwnMJCvpxRBLyvIxMKygiYuunW5pU5xsQRmKGVYcHkFiQ/fzglgTZg0lcjjTdu2bbs3ZasD9DNTuBUwg1lR4f4lqbUk6xkLAocfY+S1Yd/Bly5UW9Hib384+nBK/rSy/tLzuuAMSQKB8OMj4YrIhxNUDANCJDTP47jv4J+piPr5Z9KiBIzLv5nS2RWMdNAwcSGMTYjlL42KYUCOhO+/TdVonN4r8IGqcfXfUjhHGQ3R6yrqe8ay8yq3pH+KcbQb3v829w9fbj4L54TjcLXOs/lZkQ+XqCojtl7tLoIH2X/4RvNJMHFQX/BhVQnohA0RqEk7cLuj8Rpr8GZ3FdARHpuEexEqCwu9R4qDYg7dHav7GcdpfAAgJxAT17RDSP2T/N0ckTJbN2i8aP3Hbe3UGgjKxlplN7hkSYhDRmofu8PlNG9UcE66z9Erglfg+XCYX8i0PHDvDisZRsSQtikk6aqyEHxV7ejn5IF7l1jLWjL33V3tIyKmP5LdYCOttPKP5bKSZwnEYLnBgmgDY3wjaJOUEAsm410CRf0BnGMdt4o2oFU7fFh2c0sKMuleApm2iP3PWPQP8bYyitznlKouuqKoqriXwEq6YwNwtu3qC5hXhrYVVVWsrtqF7h61plrpMgO0bTffWarg+E+oikIpBZfygL+zfuNdAgLDzaAvu8FlFRfMqtyoB7za7I3pAHOypx7I5tUMf0oR6A6rziTygMZ0a+xgpghm53aJ1tQMf1FBhV5XHlnvAasp08vU9LQIigrslCh+vHW3MrITuKak016gq0DULAjcCuXHDvT78Y7YNGMD1ZBcEvFaGBJ0KNIU5BNADncNV+0KHfW0qOKtd0ry8oBrZsvxY+PCZSCb92dNG5C7ZG0VneVLIj7d4HUzCb9o1gaAbN7fJI/JTrKDUaN8a8CnG1wy/GrLmeZhZMUxPebLT1l8WONbAz7d4IphMy0BaBUYPaJyK/uVzXpFpDr6N/fpBteMC7Yvsx3GsMikvK5RlviMcibs0w3W2RGJUBFEVjwk57nhCsOHtSqrwX7d4Ihh+3Nt3QGREkWobAMTrM3npbqoLC/XSLMCIE+A4MO6kc/ZuMFFsSoyZ/OLpq6R5by/9iGESLhVUespsHy41M0JRD0KwEqqxiFEwrhkA1YafEmw8VW7skJXWEaVYwQQfoMMHkZda87GrNdSxoMyewf9RcJpYVRyMwQ3mFfYwARlmuVbBCYgo+hJAFOM9H9MBo9h3QZSNm5whXRUwKmlkfQkAPau30wGj6jKvRdYMrSx9cCSVA9dMksAad3/d/4VQlKsf/slu3u6bO0Vc5oOHfUggIaxbwJIY6DDhuspGzfYNNi4UyBsWon7KLBmfCSQxoDV4Dlh5wYXOxuFHFvbW9wLYMVwvA0YJUErpV+U82SWDIWLHSX2pQJZXQCGuRWBlAQtj1dPyU+ylaFY2ySu2J1W7TYXyBlWVIEzKWRgq8oGkrzS3+1ABluOsjsahvZfNDIwWD9+GTdt3d4Nmri/kxGqkXBZEJnVRR0D1CJvs2HZBiYF+ru72pZHzxlBzRBAtul2QbnBvMoGEiL/v6vkePaY1qUu0LrrP9NN6gZoZ9oOq+YfIpLOhx459uv9DicEOSzdGrd9yyykAjvQNKpkuWVnoyceR2aaWha+bkZBaKe7lxzyAfe2qpW704DYXGsMG0p3sO3w7OtCHspWt1S7BoHhbItkwfod7KTKLZdasdsDvtK1MbS96XKg2UCk6Zbl57xucdnjsH6zKTjT1DdwNlCU3XKyJ0V9zDkVIumWakGLAztllSzQnuZad9sLICVMmAI5S8DEkDS9d2tnQNQjvlSxzQSaGGZKjGCgtU6LkUPaRe+s4mW7xhhHF4Cd7F3mT4qLMAUAzwg9qlaCrDhRUIfQGeJY3LkO7bfKoD0p1HElEeSKR8BOt2/p5e9GjK//fWbPsIdVs/fzToUIrjMVZGC7Z6wC0MLRJ3/K8rl3PLCpc9zDOw+JhlDPdBQAXiC0o/EZLweTTAm+YNcxfmfpJ6lWba1jYBDaAo4d3mVPfLomO7Uv7jv0p486l1v4Dbt+SIWxUbsE1ltV4az6lQ0P7Hv22B8vtE0LohMo2Ix1eW0yOu8GuuOBJ49doBCdQKwPCmAyvNXu1YMN+45bqtAAwgRy/j1Ai+LW3Li1yHd0VwBpA5lWVZP3Ke8CoJ+6cuyRH4BKB2y2QJ71Wlo18Zm7yLm7CmgHndze7+EMaauX9D1Xb78bTl0sbrPNy7MA2vi9q0Lq/WCo0KRq/Z92W4TTPsr6ETfrehyKF1TR4DccV9C9O7h2tLsAwyUYR4ooSMDC0/6v0zj9kBvb+y8ZOG4Ql//BMyP9ySc+P/q1Lk1JEFWhPL/6o3t7r61bsC73kJPMQISBMqO2v/qqjwvZ9IU+P/nwiD0FbZBBQ2NmgR+0q/LdcW8PdMJC/bTNr/bFANTGE9bXtOtVPVox1rC3l5TSUq7zB0ZU/zP4OHhj5zu+YvOOb7Ve/2VvKZUl4JOyP0gOfvNYmwbZbuS7TX/t/LMHdVfxC+cr3U674oOZEXEUaeDpUEdx522cu76x7Hnjqz5n2YiPmem1I7wIcv8hA8b/2bv+XzmqKj67M7PfXjE1KfVLafNMRKW2zcOkUQttVoiKSDc1tKgVNhVa0wrdPBHRtrKJDVgjsCliLGi6URS/oROQKtrgBqRfwJoJQfzWyEQsj/de39v7N/je7s7OvXfu3Jm7O/eeGd9+fvIHw+ueufeczznnc861ucMAHZXo0y5xe1OMUbFx/jaCQF/QYKGHlL90uz/nXAxh7hkHRcMzE9gdiOH9sniI8BuBKuALnpxuKrTJzgcjY/6CBosC4ndBm1hlsI7aZdG00g/qCStDg8UYXaL3E/xJLM49NbQX7OFsEgoBi1jD94GX4QaohdRJTSSAWXAKSB1b9hep44VLK6yObSEBXEyGBWouTQsOktP4B56MyQkkxgINrg7exNv4+0Pr2AUkhNkk+AG+ZKuIrUK7ntQMDTlIHdsrrlpMRHCaFyPmdi9fcci3S2botTpJWKmV4QuW3tLPZr3/X4x3YPEpO2DoCPG+7AbBfmGmhcQwD62XNRFXD7jFL/iN1mXzIwYJhgz0u0L/jWiAC0J9Vj6Gfr4xBvQv7X8iXoEfalqsbhDNw7KBEj8XWsNUTcVGhzv4mwaJZXzd7jLGlY37CMDKJddQR9t/QERlXWYUL5AcoVCFLwfKRzoA4qtWkyOWq/HPoT6Aw9LtNB2Bhl+txK5yCbw9vzZNR6AVUhNehX//O6NaNT1syCvkTgSKGFz8y7WRBD8IRoi9zmjwW2luT0eLjk0oMoB3befxoUY2sjd97Vtf3XONJoR7ROkgVGmkhJCUMU4jalYI/frQalluKO+kww0u8lY5ik0RNwC4T6Eb5qWItW5GUQA8Q5hx5P39zD0puAOmTC6WbST/DhSlMhGd3S2OYzgjLqyXO7lhRGqVQb5CV0dI6hNwZgQLSP4n8GHLHmNmnoHhRxTjgonkRcG+BZJMBksK/rjRTLATqMgLAu/yYsGDiEYMQ4rxwJI3yP92jBF9HQUCdpDYkFiUK+I1xp0JLY97LiB+sWKOiCvXOYlMB6oSfWCGFNS9l1MfkPgZQtCS5wM1zXqejLjN5OVDOdSFnAfR65RfyYa7wnlNLdZJXWdT8ZhdZFeoOCFsYItC4scav0/7UJArhBklN+TGnzFGlW2llSQyPCaXgRRdz5LFjX4c8fCyphJ1iTRoATk3tmw5QbjCxGQDuiM3FTTcGk8DHQ5xhVKdcSBKkotRGdewNprfRrrCZLTJ67Kjj90lNjq9WsW/b08qHwmWs8lOQ1tdYpPzL2NYGcCLlY7RrpLuepoIlfs6vDNUqRCeCTWkJ2ENhCa9aPtbqkwEXRY05fOv+oJpscncn1AtA2AquA5JX+u4YIDXca3pw6QFGrAGsOQnoQsGmMLrju3DlAUga0J5hOTSoI4BOsSmGqQx05uABqgqyEDq3cNVC5wNMCwwuZxuKxBoNRCaoR/uLZOe2IYywCqE5C+0YxgAzU5Q2+iBDNBQ0Y6wfAbw7+faBGOADjuVJg5y0eoat84dlLsZxABbyXc/JMHpGqCGSJymhKgAUSBrq+hG6IhtAHSCPI2OegOUlJy6XM8AVUTjO+SGDvUGaChhn8VegaPiT3onyUug4B9DIKdGp71s0QBYLhBIBwoK/jEEtqpJwSs9A1wSOjVeV2sAesBbRkncvWjTnXoACX99JKe2HlBCagxg96q8RcTCjzUMNen/GBx1NVUo0yVZufCVxXmVNUFTURmu5Db8DcTERfxjNxW2hzcrmtap9MdxCabDZoSr1GklMy1FVSir33GxEBsP4V0qZY2RgqIahOmdrnpQFwS7fDVlrbGqImXSKq/UsCXC1HhJcmZKnzX52WDdO9FjEeZFdUdqedJnaen1AANrOeWRD/4Vlg2JpxFHTZFAdR1WbtWRD/79/evltalxZN0bILkmmLHwCNtCQZif6DtnmSHZQ1FRN6ZINLtrEfYoZWV9CwJsh/ycFjsannfhL5v15KRNWbeRgKVGl1IgOy6FKEPTVVn+GIehZm450yTn4HSEwr3AJdIiMoaSmnm1tfTJaqJg/Ml1G9JIKYaKEm2WYXs3gPN3ydf9tZyKckgzwBPF+4frvptVijAvqSuQSPlZgIz3fz+Juvirz/fwz58d90kU2Hw9F6Mb/DCrzmCh8EhoSZFse+BmJb/R4sL7HH+KweYftFS9Kb8rsgFJPwKeCnSXnxjw5aF1+TywQ0ljeVUsAJmdATlm1gkfma3J0ip5aEje6Wc84F3sbdFsjyXBNekuQGuhYPxdGxYrDjrBJ2osPA5UJCRlFBx5210zH7ufuzDZCN8hlNdkI4t4mBuiP7DxgB32UGMjAavUFr+ChEuwYu+vfX0vrjIV7OnZfk/oxe03WTFtd12x91eslocfZgIGJnNYKVK3YlhxnP30DxADZ5fz8xA1VTmOAV4JoiYzy4U+/j4bsXCG/V9ZDz8vmCfCbnM4OnSpF/RIPB5kfvix8QIxo71+mGd29aCff/HW4HIc+LhcgbjreTT4Jfi4HRDQvzfOaUuDL1UtEK0QfeA939lDyEP0V0bz4GPjRTL7sHk1Sj/406/tc8duDGXi0CuECqQoxBrsxQfTon75yUeO7Lk2ytXZDM0FC+R4ojVQWmj2v+O5XxzZs/0DApEzDx0GCp7P5ZzIF6J8/z8f231lrNmo/L74AvJEHTbDL1Oz0SGQ57/5kVgUmhIr8yEGKHPJ+VH+hsQ/3Db8P0BRjz6Qi41jJQohwcR+9NKtcioy0lsCRDo8wZAuRZmj3DR/r5TO1CJUpEM6HnNMR3ihlfGzclyXEIgIuL95mrn6WupKGVekCJsP9v/8MzsOweyxqMAyoSb4bs8C7EpZujivfo1DpgW6QSiwQ6dogmABFVAuvAx+u2sB1ABF+OcuMotJuCKpmh85eANoVUgDZBNggCKkAbQWvAGyNqQB6uBOUNNqkAbYkgADlCANQKbA4ostL9/7/Wdfc9qvLdQB774mvpENZWEwahhYzr69nyG7wOfvm4jxHqoxQNaJTIX9P9/vveYGKg9cBkeFNa05aDL0QXYAebEcw+SmSgNUUATMMNVPbMx9PibNvpJsMKIXfIP9+dlo3xlPLFJSD/AdPzaeY4j/4rRAAXKxfBQuOCm2Ebu9Kw4yqKQk5s9F2FVhwQcy5soxkEGZ9FvQCUzxd18OLa1ZCISq2ScGQ+zBJzNa+nRqeD4msQolyATmljN+f8xuoKWyDulv0vPxwiBPBM2KXYIaTGvM35zhzw/pTVlP6I8BiYToohx/pj/zIPIhpomLnMpmTMRA6Nf534EYiGfoJmMDPq/CLw2/OuiToReFvEAdph4SnhLPl4lll9KeS9wAlAp0UIviy4yW1NfDS1BEcBGlCJQu00A9yHkt0ISRi3ehR/CAVyFxPCX02C2ARCh8euUxYs2l1DvQVLDIhZOLsHGG3vEo8enoqipRikBVZGac3vIp8fn0NXBBICghulge4gIIn+MxJRvtRBKiuW3EAgw+zj3rDKn1K6gS5TBR4P1+7f1htP8rEwtW2nj/UFUdE9AHElTc//uNkGzprOsq3tMaoruThSLCbCo+i5GYWxAXZ/By4RCTPzZERTQoEJ7FfFBeoPynW4PTGQvJf+QkYlWk/bhvBRCPK+Iw7YEJbROmGEAxUf+gW94OyZZJXDFwcb8ORoMoNvzTcXoO/tt2mHjm0gOPHvlUT0A/KBWqQboAr0nqyf9JGzg8uv8Jx7s4emvAwZcqREGUlkyevyswY9zXClQxXEHEg7UDxvOq6rFRPxN96S5uoN7HOAXl7jf//d2dlQFPe6sTxcNAFSwR6KDw75/fGDoefZypnFjXeTIrc4cbEt452ABoVd4yu9iQuZ2V7TRP9YvGU74jMBHdAGA8WAQ7/aVbs13uFw26/3PdQP68CnoDIuNzvsJv6U2svv48rXs7Kh4G55TTQCHsp3nOhiex4YcZOqQ/KU6EXtUSjWyTokHVSUzr0x6nysyvR6fCgCxICDmHdHG1Mt5j2uW1WgRDekt5V3RQXEUZwHP0pnvnawNUhh218rjhl0S7Bqh6BtDdSsaYOBPS0+ECO8gTRHD1Nuwr9si/IU7rc7FvcpSIGu6vitiZtd07bwkrXYoxL3KUChO/r9nTuAGmaO3nRNRsLEUHQNO24rXLG7b5DVAQLgxXUnQAvEJx58BnHy17z8tP0f3WSaGKzI+0lOAGvH+R3e7axYv7DVEu3DHpTApCAPlIbZkODxdcUijIhc1UkEAMV7MkAGMLNTBaePSyQBA4paUHus3grVWvpaNHVXthJ2Y2JR6Q8AK7KDp/lM5tpiL7wHaKLoAXCKYphriLLjNPR1aqPaalC70j8BBxA9rjdL9/Niq7Pq2lDIZNDUeYhE8whZKBZegfqYmA9BGYncCEdK9ggV0kGaj+M1UOkOQCs122ezvF+2oiycAjKfz9fS6A5u+7Utv4AH3eVwNIPhUj2+Jt3ssrHn+DwDt8sxVEZFM6AguD/bxRqSaQ3EcljBZnHf0W5ZMPAMjZyMOXqPwGSu6iFCu9M/AwfTwgdN/qoR/snf8vazQs9cp/EFx+4Im/nGTtkK783xOBEJTS0uqRBUPpcxlJRFPlcxlJxGYg3WtiUEhHw18eMjaU8DUpqKZE8iANBbXbMJKHTCv+BzzThatBRqASBMNZ4mRQqwVsFHmrtkSQQx2coHzDF1MjBBgaNdTBYaIXfjw9QoCh0TsC7e961dLPOvNLKUW+xR3G2a0t4t2Loyff0JYQvCGi+ZO/fOKPXY+wpPA2/6zpEsP11Fjq0nGAzCmL3y29369p1zl9P3CvtiRhHrQ7P//Y0k0Msx/dsePapXj6RxhhhBFGGGGEEUYYYYQRRhhhhBFGGOF/7cEhAQAAAICg/6/dYAcAAAAAAAAAAIAtmJHpTFcLUiUAAAAASUVORK5CYII=');
  });
});
