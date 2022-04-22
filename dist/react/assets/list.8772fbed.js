import{e as S,l as T}from"./remesh-logger.3b445c02.js";const o=(m,e)=>{const c=m.state({name:`${e.name}.KeyListState`,default:[]}),r=m.state({name:`${e.name}.ItemState`});m.command$({name:`${e.name}.addItemCommand$`,inspectable:!1,impl:()=>{var n;return S(((n=e.default)!=null?n:[]).map(t=>k(T(t))))}});const l=m.query({name:`${e.name}.itemList`,impl:({get:n})=>n(c()).map(t=>n(r(t)))}),i=m.event({name:`${e.name}.ListChangedEvent`}),y=m.event({name:`${e.name}.ItemAddedEvent`}),I=m.event({name:`${e.name}.FailedToAddItemEvent`}),L=m.event({name:`${e.name}.ItemUpdatedEvent`}),$=m.event({name:`${e.name}.FailedToUpdateItemEvent`}),E=m.event({name:`${e.name}.ItemDeletedEvent`}),v=m.command({name:`${e.name}.setList`,impl:({get:n},t)=>{const a=t.map(e.key),s=n(l());return[t.map((d,u)=>r(a[u]).new(d)),c().new(a),i({previous:s,current:t})]}}),k=m.command({name:`${e.name}.addItem`,impl:({get:n},t)=>{const a=n(c()),s=n(l()),d=e.key(t);return a.includes(d)?I({reason:"item already exists"}):[v(s.concat(t)),y({item:t})]}}),q=m.command({name:`${e.name}.deleteItem`,impl:({get:n},t)=>{const s=n(l()).filter(u=>e.key(u)!==t),d=n(r(t));return[v(s),E({item:d})]}}),A=m.command({name:`${e.name}.updateItem`,impl:({get:n},t)=>{const a=e.key(t);if(!n(c()).includes(a))return $({item:t,reason:"item does not exist"});const u=n(l()).map(f=>e.key(f)===a?t:f),F=n(r(a));return[v(u),L({previous:F,current:t})]}});return{command:{setList:v,addItem:k,deleteItem:q,updateItem:A},query:{keyList:c.query,item:r.query,itemList:l},event:{ListChangedEvent:i,ItemAddedEvent:y,FailedToAddItemEvent:I,ItemUpdatedEvent:L,FailedToUpdateItemEvent:$,ItemDeletedEvent:E}}};export{o as L};
//# sourceMappingURL=list.8772fbed.js.map
