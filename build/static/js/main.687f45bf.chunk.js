(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{155:function(e){e.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"MainTesting","sourceName":"contracts/MainTesting.sol","abi":[{"inputs":[{"internalType":"uint256","name":"_amountForTeam","type":"uint256"},{"internalType":"uint256","name":"_maxPublicTx","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_preSaleListCounter","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_presaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_publicCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"addToPreSaleOverflow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPresale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublic","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPublicTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"quantity","type":"uint8"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"mintPreSaleTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"publicSaleMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxMints_","type":"uint256"}],"name":"setMaxMints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPresale","type":"uint256"}],"name":"setMaxPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setNewPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setPreSaleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isActive","type":"bool"}],"name":"setPresaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"isActive","type":"bool"}],"name":"setPublicActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},288:function(e,t,n){},502:function(e,t){},505:function(e,t){},508:function(e,t){},512:function(e,t){},536:function(e,t){},538:function(e,t){},552:function(e,t){},554:function(e,t){},584:function(e,t){},586:function(e,t){},670:function(e,t){},671:function(e,t){},771:function(e,t,n){"use strict";n.r(t);var a=n(43),r=n.n(a),i=n(266),s=n.n(i),o=n(28),u=n(88),c=n(3),p=n.n(c),l=(n(288),n(64)),y=n(155),d={"0x1":"Mainnet","0x3":"Ropsten","0x2a":"Kovan","0x4":"Rinkeby","0x5":"Goerli","0x61":"BSC Testnet","0x38":"BSC Mainnet","0x89":"Polygon Mainnet","0x13881":"Polygon Mumbai Testnet","0xa86a":"AVAX Mainnet"},m=n(24),b=n.n(m),f=n(267),h=n.n(f),x=(n(309),n(20)),g=(0,n(772).createAlchemyWeb3)("https://eth-rinkeby.alchemyapi.io/v2/4V5OB61hmIw0_boKEQYbpJBg8QyR-lWf"),v="0xA098f9aC53cB8e919D31aF700667fc54d8E0407F",w=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),c=(s[0],s[1],Object(a.useState)(!1)),m=Object(u.a)(c,2),f=m[0],w=m[1],T=Object(a.useState)(""),k=Object(u.a)(T,2),M=k[0],j=k[1],O="",F=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!==typeof window.ethereum&&window.ethereum.isMetaMask?w(!1):console.log("Metamask not installed");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n,a,i,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=function(e){window.location.reload()},t=window,n=t.ethereum){e.next=7;break}return console.log("Make sure you have metamask!"),e.abrupt("return");case 7:console.log("We have the ethereum object",n);case 8:return e.next=10,n.request({method:"eth_accounts"});case 10:return 0!==(a=e.sent).length?(i=a[0],console.log("Found an authorized account:",i),r(i),C()):console.log("No authorized account found"),e.next=14,n.request({method:"eth_chainId"});case 14:s=e.sent,j(d[s]),n.on("chainChanged",o);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,n.request({method:"eth_requestAccounts"});case 7:a=e.sent,console.log("Connected",a[0]),r(a[0]),C(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=20;break}return e.prev=1,e.next=4,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x4"}]});case 4:e.next=18;break;case 6:if(e.prev=6,e.t0=e.catch(1),4902!==e.t0.code){e.next=17;break}return e.prev=9,e.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x4",chainName:"Rinkeby",rpcUrls:["https://eth-rinkeby.alchemyapi.io/v2/4V5OB61hmIw0_boKEQYbpJBg8QyR-lWf"],nativeCurrency:{name:"Ethereum",symbol:"ETH",decimals:18},blockExplorerUrls:["https://rinkeby.etherscan.io/"]}]});case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(9),console.log(e.t1);case 17:console.log(e.t0);case 18:e.next=21;break;case 20:alert("MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html");case 21:case"end":return e.stop()}}),e,null,[[1,6],[9,14]])})));return function(){return e.apply(this,arguments)}}();function I(){return I=Object(o.a)(p.a.mark((function e(t,a){var r,i,s,u,c,d,m,f,x,T,k,M,j,F,N;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=function(){var e=Object(o.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getFeeData();case 2:return t=e.sent,e.abrupt("return",t.gasPrice);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.getTransactionCount());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w(!0),s=new l.a.providers.Web3Provider(window.ethereum),u=s.getSigner(),c=new l.a.Contract(v,y.abi,s),""===n){e.next=66;break}return e.next=10,i(u);case 10:return d=e.sent,e.next=13,r();case 13:return m=e.sent,t=1,e.next=17,h.a.get("https://scarce-guttural-museum.glitch.me/",{params:{address:n}}).then((function(e){return f=e.data.proof}));case 17:return e.next=19,c.populateTransaction.mintPreSaleTokens(t,f,{value:BigInt((5e16*t).toString()),gasLimit:285e3*t,nonce:d});case 19:return x=e.sent,console.log("...Submitting transaction with gas price of:",l.a.utils.formatUnits(m,"gwei"),"in gwei - & nonce:",d),T=u.sendTransaction(x),e.next=24,T;case 24:return k=e.sent.wait(),e.next=27,T;case 27:if(M=e.sent.hash,function(){return O=M}(),!k){e.next=62;break}return e.t0=console,e.t1="Transaction is successful!!!\nTransaction Hash:",e.next=35,T;case 35:return e.t2=e.sent.hash,e.t3=e.t2+"\n",e.t4=e.t3+"Block Number: ",e.next=40,k;case 40:return e.t5=e.sent.blockNumber,e.t6=e.t4+e.t5,e.t7=e.t6+"\n",e.t8=e.t7+"Navigate to https://rinkeby.etherscan.io/tx/",e.next=46,T;case 46:return e.t9=e.sent.hash,e.t10=e.t8+e.t9,e.t0.log.call(e.t0,e.t1,e.t10,"to see your transaction"),e.t11=b.a,e.t12="<a href=' https://rinkeby.etherscan.io/tx/",e.next=53,T;case 53:e.t13=e.sent.hash,e.t14=e.t12.concat.call(e.t12,e.t13,'\' target="_blank"> rinkeby.etherscan.io/</a> '),e.t15="Hey there! we are minted successfully completed."+e.t14,e.t16=e.t15+"",e.t17={title:"Minting successfull",html:e.t16,width:600,padding:"3em",color:"#716add",background:"#fff url(/images/trees.png)",backdrop:'\n                    rgba(0,0,123,0.4)\n                    url("/images/nyan-cat.gif")\n                    left top\n                    no-repeat\n                  '},e.t11.fire.call(e.t11,e.t17),w(!1),e.next=64;break;case 62:console.log("Error submitting transaction"),w(!1);case 64:e.next=68;break;case 66:console.log("Wrong network - Connect to configured chain ID first!"),w(!1);case 68:e.next=97;break;case 70:if(e.prev=70,e.t18=e.catch(0),console.log("Error Caught in Catch Statement: ",e.t18),"MetaMask Tx Signature: User denied transaction signature."!=e.t18.message){e.next=79;break}return b.a.fire({icon:"error",title:"Minting Failed",text:"Minting failed, you rejected the transaction, try again"}),w(!1),e.abrupt("return",0);case 79:return e.next=81,g.eth.getTransaction(O);case 81:return j=e.sent,console.log("transaction hash: ",O),console.log("trying to do getTransaction",j),F={to:j.to,from:j.from,value:j.value,data:j.input},e.prev=85,e.next=88,g.eth.call(F,j.blockNumber);case 88:N=e.sent,console.log("Working ok",N),e.next=96;break;case 92:e.prev=92,e.t19=e.catch(85),console.log("error is from long stuff here:",e.t19),"Error: Returned error: execution reverted: Whitelist mint is not active yet"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Whitelist mint has not started yet"}):"Error: Returned error: execution reverted: ERC721A: quantity to mint too high"==e.t19||"Error: Returned error: execution reverted: Exceeded max available to purchase at a time"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Can not mint more than 1 on the whitelist"}):"Error: Returned error: execution reverted: Must mint more than 0 tokens"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"You must mint more than 1 NFT"}):"Error: Returned error: execution reverted: No more NFTs left"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"All the NFTs are gone"}):"Error: Returned error: execution reverted: Incorrect funds"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Incorrect amount of ETH"}):"Error: Returned error: execution reverted: Invalid MerkleProof"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Invalid MerkleProof - You are not on the whitelist"}):b.a.fire({icon:"error",title:"Minting Failed",text:"Please try again"});case 96:w(!1);case 97:case"end":return e.stop()}}),e,null,[[0,70],[85,92]])}))),I.apply(this,arguments)}var S=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(2);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_(3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function _(e){return A.apply(this,arguments)}function A(){return A=Object(o.a)(p.a.mark((function e(t){var a,r,i,s,u,c,d,m,f,h,x,T,k,M;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=function(){var e=Object(o.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.getFeeData();case 2:return t=e.sent,e.abrupt("return",t.gasPrice);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(o.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",e.sent.getTransactionCount());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w(!0),i=new l.a.providers.Web3Provider(window.ethereum),s=i.getSigner(),u=new l.a.Contract(v,y.abi,i),""===n){e.next=63;break}return e.next=10,r(s);case 10:return c=e.sent,e.next=13,a();case 13:return d=e.sent,e.next=16,u.populateTransaction.publicSaleMint(t,{value:BigInt((5e16*t).toString()),gasLimit:285e3*t,nonce:c});case 16:return m=e.sent,console.log("...Submitting transaction with gas price of:",l.a.utils.formatUnits(d,"gwei"),"in gwei - & nonce:",c),f=s.sendTransaction(m),e.next=21,f;case 21:return h=e.sent.wait(),e.next=24,f;case 24:if(x=e.sent.hash,function(){return O=x}(),!h){e.next=59;break}return e.t0=console,e.t1="Transaction is successful!!!\nTransaction Hash:",e.next=32,f;case 32:return e.t2=e.sent.hash,e.t3=e.t2+"\n",e.t4=e.t3+"Block Number: ",e.next=37,h;case 37:return e.t5=e.sent.blockNumber,e.t6=e.t4+e.t5,e.t7=e.t6+"\n",e.t8=e.t7+"Navigate to https://rinkeby.etherscan.io/tx/",e.next=43,f;case 43:return e.t9=e.sent.hash,e.t10=e.t8+e.t9,e.t0.log.call(e.t0,e.t1,e.t10,"to see your transaction"),e.t11=b.a,e.t12="<a href=' https://rinkeby.etherscan.io/tx/",e.next=50,f;case 50:e.t13=e.sent.hash,e.t14=e.t12.concat.call(e.t12,e.t13,'\' target="_blank"> rinkeby.etherscan.io/</a> '),e.t15="Hey there! we are minted successfully completed."+e.t14,e.t16=e.t15+"",e.t17={title:"Minting successfull",html:e.t16,width:600,padding:"3em",color:"#716add",background:"#fff url(/images/trees.png)",backdrop:'\n              rgba(0,0,123,0.4)\n              url("/images/nyan-cat.gif")\n              left top\n              no-repeat\n              '},e.t11.fire.call(e.t11,e.t17),w(!1),e.next=61;break;case 59:console.log("Error submitting transaction"),w(!1);case 61:e.next=66;break;case 63:console.log("Wrong network - Connect to configured chain ID first!"),w(!1),b.a.fire("Connect wallet","Before minting you must connect your wallet","question");case 66:e.next=95;break;case 68:if(e.prev=68,e.t18=e.catch(0),console.log("Error Caught in Catch Statement: ",e.t18),"MetaMask Tx Signature: User denied transaction signature."!=e.t18.message){e.next=77;break}return b.a.fire({icon:"error",title:"Minting Failed",text:"Minting failed, you rejected the transaction, try again"}),w(!1),e.abrupt("return",0);case 77:return e.next=79,g.eth.getTransaction(O);case 79:return T=e.sent,console.log("transaction hash: ",O),console.log("trying to do getTransaction",T),k={to:T.to,from:T.from,value:T.value,data:T.input},e.prev=83,e.next=86,g.eth.call(k,T.blockNumber);case 86:M=e.sent,console.log("Working ok",M),e.next=94;break;case 90:e.prev=90,e.t19=e.catch(83),console.log("error is from long stuff here:",e.t19),"Error: Returned error: execution reverted: Public mint has not begun yet"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Public mint has not started yet"}):"Error: Returned error: execution reverted: Exceeds max per transaction"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Can not mint more than 3 at a time"}):"Error: Returned error: execution reverted: Incorrect funds"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Incorrect amount of ETH"}):"Error: Returned error: execution reverted: Exceeds max per address"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"Can not mint more then 3 on the public mint"}):"Error: Returned error: execution reverted: Must mint more than 0 tokens at a time"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"You must mint more than 1 NFT"}):"Error: Returned error: execution reverted: No more NFTs left"==e.t19?b.a.fire({icon:"error",title:"Minting Failed",text:"All the NFTs are gone"}):b.a.fire({icon:"error",title:"Minting Failed",text:"Please try again"});case 94:w(!1);case 95:case"end":return e.stop()}}),e,null,[[0,68],[83,90]])}))),A.apply(this,arguments)}Object(a.useEffect)((function(){N(),""!=n&&w(!0),""!==n&&"Rinkeby"===M&&F()}),[M]);return Object(x.jsxs)("div",{className:"App",children:[f?Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]}):"",Object(x.jsxs)("div",{className:f?"container disabledbutton":"container",children:[Object(x.jsx)("div",{className:"nav header-container",children:Object(x.jsx)("div",{className:"connect",children:""===n?Object(x.jsx)("button",{onClick:E,className:"cta-button connect-wallet-button",children:"Connect to Wallet"}):""})}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{class:"arek",children:"ERC721 and MerkleProof with User Feedback For Errors "}),Object(x.jsx)("p",{class:"arek",children:"Error checking with feedback and only allowed to mint the when public or presale is active and only if you are whitelisted"}),Object(x.jsx)("div",{className:"row body",children:Object(x.jsx)("div",{className:"col-md-6 tesboddy ff",children:Object(x.jsxs)("div",{className:" mint_div ",children:[Object(x.jsx)("button",{onClick:function(e,t){return I.apply(this,arguments)},className:"cta-button connect-wallet-button",children:"Mint NFT WHITELIST only 1"}),Object(x.jsx)("button",{onClick:S,className:"cta-button connect-wallet-button",children:"Mint NFT public 1 nft"}),Object(x.jsx)("button",{onClick:P,className:"cta-button connect-wallet-button",children:"Mint NFT public 2 nft"}),Object(x.jsx)("button",{onClick:R,className:"cta-button connect-wallet-button",children:"Mint NFT public 3 nft"})]})})})]})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,774)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root")),T()}},[[771,1,2]]]);
//# sourceMappingURL=main.687f45bf.chunk.js.map