!function(A,U,C){"use strict";var V="ht",T=A[V],t=null,F=Math,Y=F.PI,B=F.cos,p=F.sin,J=F.abs,$=F.max,d=F.sqrt,k=1e-5,l=T.Default,e=l.def,E=l.startAnim,D=l.createMatrix,I=l.transformVec,o=l.getInternal(),s=o.addMethod,w=o.superCall,P=o.toPointsArray,r=o.createNormals,q=o.toFloatArray,Z=o.glMV,m=o.batchShape,L=o.createNodeMatrix,u=o.getFaceInfo,c=o.transformAppend,G=o.drawFaceInfo,b=o.createAnim,R=o.cube(),i=R.is,S=R.vs,N=R.uv,O=o.ui(),f=T.Node,M=T.Shape,W="h",j="v",z="front",x="back",X="left",n="right",y="top",Q="bottom",H="dw.expanded",g=".expanded",h="dw.angle",v=".angle",K=function(B,l,I){e(V+"."+B,l,I)},a=function(y,c,p){p?y.push(c.x,c.y):y.push(c.x,c.y,c.z)},_=[1,0,0],Mj=function(y,w,q,C){var W,$,x,b,L=0,Q=[];if(C)for(W=C.length;W>L;L+=3)$=C[L],x=C[L+1],b=C[L+2],Q.push(new tg([new Wm([w[3*$],w[3*$+1],w[3*$+2]],_,q?[q[2*$],q[2*$+1],0]:t),new Wm([w[3*x],w[3*x+1],w[3*x+2]],_,q?[q[2*x],q[2*x+1],0]:t),new Wm([w[3*b],w[3*b+1],w[3*b+2]],_,q?[q[2*b],q[2*b+1],0]:t)],y));else for(W=w.length;W>L;L+=3)$=L,x=L+1,b=L+2,Q.push(new tg([new Wm([w[3*$],w[3*$+1],w[3*$+2]],_,q?[q[2*$],q[2*$+1],0]:t),new Wm([w[3*x],w[3*x+1],w[3*x+2]],_,q?[q[2*x],q[2*x+1],0]:t),new Wm([w[3*b],w[3*b+1],w[3*b+2]],_,q?[q[2*b],q[2*b+1],0]:t)],y));return Q},mc=[X,z,n,x,y,Q],ul=mc.concat("csg"),kd=[0,6,12,18,24,30],yk=function(Y,c,O){for(var g=L(Y),z=[],x=0;6>x;x++)for(var u=mc[x],W=kd[x],T=O?c.getFaceUv(Y,u):t,k=O?c.getFaceUvScale(Y,u):t,X=O?c.getFaceUvOffset(Y,u):t,f=0;2>f;f++){var B,v,l,C=i[W+3*f],p=i[W+3*f+1],Q=i[W+3*f+2];if(O){if(T){var H=8*x;B=[T[2*C-H],T[2*C+1-H],0],v=[T[2*p-H],T[2*p+1-H],0],l=[T[2*Q-H],T[2*Q+1-H],0]}else B=[N[2*C],N[2*C+1],0],v=[N[2*p],N[2*p+1],0],l=[N[2*Q],N[2*Q+1],0];k&&(B[0]*=k[0],B[1]*=k[1],v[0]*=k[0],v[1]*=k[1],l[0]*=k[0],l[1]*=k[1]),X&&(B[0]+=X[0],B[1]+=X[1],v[0]+=X[0],v[1]+=X[1],l[0]+=X[0],l[1]+=X[1])}z.push(new tg([new Wm(I([S[3*C],S[3*C+1],S[3*C+2]],g),_,B),new Wm(I([S[3*p],S[3*p+1],S[3*p+2]],g),_,v),new Wm(I([S[3*Q],S[3*Q+1],S[3*Q+2]],g),_,l)],Y))}return Ur.$15n(z)},Jf=function(u,T){var b,B=u.data.getAttaches();if(B&&B.each(function(u){u instanceof Pn&&u.s("attach.operation")&&(b||(b=[]),b.push(u))}),b){var $;mc.forEach(function(k){var q=Mj(k,u[k].vs,u[k].tuv);$=$?$.concat(q):q}),$=Ur.$15n($),b.forEach(function(Z){var v=Z.s("attach.operation");$[v]&&($=$[v](yk(Z,u.gv,u.csg.tuv)))}),mc.forEach(function(K){K=u[K],K.vs=[],K.tuv&&(K.tuv=[])}),$.$19n().forEach(function(Z){var N=Z.$10n;if(N instanceof Pn){if(N.s("attach.cull"))return;N="csg"}for(var X=u[N],g=X.vs,H=X.tuv,i=Z.$9n,o=2;o<i.length;o++)a(g,i[0].$24n),a(g,i[o-1].$24n),a(g,i[o].$24n),H&&(a(H,i[0].uv,!0),a(H,i[o-1].uv,!0),a(H,i[o].uv,!0))})}ul.forEach(function(S){var U=u[S];U.visible&&U.vs.length?(U.ns=r(U.vs),q(U,"vs"),q(U,"tuv")):delete u[S]}),T&&(m(u,t,T),u.clear())};s(l,{createFrameModel:function(D,w,m,N){D=D==t?.07:D,w=w==t?D:w,m=m==t?D:m,N=N?N:{};var f=N.top,i=N.bottom,l=N.left,M=N.right,X=N.front,K=N.back,J=[],O=[];return X===!0?(J.push(-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5),O.push(0,0,0,1,1,1,1,1,1,0,0,0)):X===!1||(J.push(-.5,.5,.5,-.5,-.5,.5,-.5+D,-.5,.5,-.5+D,-.5,.5,-.5+D,.5,.5,-.5,.5,.5,.5-D,.5,.5,.5-D,-.5,.5,.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5-D,.5,.5,-.5+D,.5,.5,-.5+D,.5-w,.5,.5-D,.5-w,.5,.5-D,.5-w,.5,.5-D,.5,.5,-.5+D,.5,.5,-.5+D,-.5+w,.5,-.5+D,-.5,.5,.5-D,-.5,.5,.5-D,-.5,.5,.5-D,-.5+w,.5,-.5+D,-.5+w,.5),O.push(0,0,0,1,D,1,D,1,D,0,0,0,1-D,0,1-D,1,1,1,1,1,1,0,1-D,0,D,0,D,w,1-D,w,1-D,w,1-D,0,D,0,D,1-w,D,1,1-D,1,1-D,1,1-D,1-w,D,1-w)),K===!0?(J.push(-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5),O.push(1,0,0,1,1,1,0,1,1,0,0,0)):K===!1||(J.push(-.5,.5,-.5,-.5+D,-.5,-.5,-.5,-.5,-.5,-.5+D,-.5,-.5,-.5,.5,-.5,-.5+D,.5,-.5,.5-D,.5,-.5,.5,-.5,-.5,.5-D,-.5,-.5,.5,-.5,-.5,.5-D,.5,-.5,.5,.5,-.5,-.5+D,.5,-.5,.5-D,.5-w,-.5,-.5+D,.5-w,-.5,.5-D,.5-w,-.5,-.5+D,.5,-.5,.5-D,.5,-.5,-.5+D,-.5+w,-.5,.5-D,-.5,-.5,-.5+D,-.5,-.5,.5-D,-.5,-.5,-.5+D,-.5+w,-.5,.5-D,-.5+w,-.5),O.push(1,0,1-D,1,1,1,1-D,1,1,0,1-D,0,D,0,0,1,D,1,0,1,D,0,0,0,1-D,0,D,w,1-D,w,D,w,1-D,0,D,0,1-D,1-w,D,1,1-D,1,D,1,1-D,1-w,D,1-w)),l===!0?(J.push(-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5),O.push(0,0,0,1,1,1,1,1,1,0,0,0)):l===!1||(J.push(-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5+m,-.5,-.5,-.5+m,-.5,.5,-.5+m,-.5,.5,-.5,-.5,.5,.5-m,-.5,-.5,.5-m,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5-m,-.5,.5,-.5+m,-.5,.5-w,-.5+m,-.5,.5-w,.5-m,-.5,.5-w,.5-m,-.5,.5,.5-m,-.5,.5,-.5+m,-.5,-.5+w,-.5+m,-.5,-.5,-.5+m,-.5,-.5,.5-m,-.5,-.5,.5-m,-.5,-.5+w,.5-m,-.5,-.5+w,-.5+m),O.push(0,0,0,1,m,1,m,1,m,0,0,0,1-m,0,1-m,1,1,1,1,1,1,0,1-m,0,m,0,m,w,1-m,w,1-m,w,1-m,0,m,0,m,1-w,m,1,1-m,1,1-m,1,1-m,1-w,m,1-w)),M===!0?(J.push(.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5),O.push(1,0,0,1,1,1,0,1,1,0,0,0)):M===!1||(J.push(.5,.5,-.5,.5,-.5,-.5+m,.5,-.5,-.5,.5,-.5,-.5+m,.5,.5,-.5,.5,.5,-.5+m,.5,.5,.5-m,.5,-.5,.5,.5,-.5,.5-m,.5,-.5,.5,.5,.5,.5-m,.5,.5,.5,.5,.5,-.5+m,.5,.5-w,.5-m,.5,.5-w,-.5+m,.5,.5-w,.5-m,.5,.5,-.5+m,.5,.5,.5-m,.5,-.5+w,-.5+m,.5,-.5,.5-m,.5,-.5,-.5+m,.5,-.5,.5-m,.5,-.5+w,-.5+m,.5,-.5+w,.5-m),O.push(1,0,1-m,1,1,1,1-m,1,1,0,1-m,0,m,0,0,1,m,1,0,1,m,0,0,0,1-m,0,m,w,1-m,w,m,w,1-m,0,m,0,1-m,1-w,m,1,1-m,1,m,1,1-m,1-w,m,1-w)),f===!0?(J.push(.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5),O.push(1,1,1,0,0,0,0,0,0,1,1,1)):f===!1||(J.push(.5,.5,.5,.5,.5,-.5,.5-D,.5,-.5,.5-D,.5,-.5,.5-D,.5,.5,.5,.5,.5,-.5+D,.5,.5,-.5+D,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5+D,.5,.5,.5-D,.5,.5,.5-D,.5,.5-m,-.5+D,.5,.5-m,-.5+D,.5,.5-m,-.5+D,.5,.5,.5-D,.5,.5,.5-D,.5,-.5+m,.5-D,.5,-.5,-.5+D,.5,-.5,-.5+D,.5,-.5,-.5+D,.5,-.5+m,.5-D,.5,-.5+m),O.push(1,1,1,0,1-D,0,1-D,0,1-D,1,1,1,D,1,D,0,0,0,0,0,0,1,D,1,1-D,1,1-D,1-m,D,1-m,D,1-m,D,1,1-D,1,1-D,m,1-D,0,D,0,D,0,D,m,1-D,m)),i===!0?(J.push(.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5),O.push(1,0,0,1,1,1,0,1,1,0,0,0)):i===!1||(J.push(.5,-.5,.5,.5-D,-.5,-.5,.5,-.5,-.5,.5-D,-.5,-.5,.5,-.5,.5,.5-D,-.5,.5,-.5+D,-.5,.5,-.5,-.5,-.5,-.5+D,-.5,-.5,-.5,-.5,-.5,-.5+D,-.5,.5,-.5,-.5,.5,.5-D,-.5,.5,-.5+D,-.5,.5-m,.5-D,-.5,.5-m,-.5+D,-.5,.5-m,.5-D,-.5,.5,-.5+D,-.5,.5,.5-D,-.5,-.5+m,-.5+D,-.5,-.5,.5-D,-.5,-.5,-.5+D,-.5,-.5,.5-D,-.5,-.5+m,-.5+D,-.5,-.5+m),O.push(1,0,1-D,1,1,1,1-D,1,1,0,1-D,0,D,0,0,1,D,1,0,1,D,0,0,0,1-D,0,D,m,1-D,m,D,m,1-D,0,D,0,1-D,1-m,D,1,1-D,1,D,1,1-D,1-m,D,1-m)),{vs:J,uv:O}}}),s(T.Style,{"dw.flip":!1,"dw.s3":[.999,.999,.5],"dw.t3":C,"dw.expanded":!1,"dw.toggleable":!0,"dw.axis":"left","dw.start":0,"dw.end":Y/2,"dw.angle":0,"attach.cull":!1,"attach.operation":"subtract"},!0),mc.forEach(function(f){var R={};R[f+g]=!1,R[f+".toggleable"]=!1,R[f+".axis"]=X,R[f+".start"]=0,R[f+".end"]=Y/2,R[f+v]=0,s(T.Style,R,!0)});var Ur=function(){this.$4n=[]};Ur.$15n=function(R){var M=new Ur;return M.$4n=R,M},Ur.prototype={clone:function(){var f=new Ur;return f.$4n=this.$4n.map(function(r){return r.clone()}),f},$19n:function(){return this.$4n},union:function(K){var l=new fm(this.clone().$4n),g=new fm(K.clone().$4n);return l.$3n(g),g.$3n(l),g.$6n(),g.$3n(l),g.$6n(),l.$7n(g.$2n()),Ur.$15n(l.$2n())},subtract:function(G){var Y=new fm(this.clone().$4n),v=new fm(G.clone().$4n);return Y.$6n(),Y.$3n(v),v.$3n(Y),v.$6n(),v.$3n(Y),v.$6n(),Y.$7n(v.$2n()),Y.$6n(),Ur.$15n(Y.$2n())},intersect:function(V){var N=new fm(this.clone().$4n),k=new fm(V.clone().$4n);return N.$6n(),k.$3n(N),k.$6n(),N.$3n(k),k.$3n(N),N.$7n(k.$2n()),N.$6n(),Ur.$15n(N.$2n())},inverse:function(){var O=this.clone();return O.$4n.map(function(j){j.flip()}),O}},Ur.cube=function(u){u=u||{};var k=new pm(u.center||[0,0,0]),t=u.radius?u.radius.length?u.radius:[u.radius,u.radius,u.radius]:[1,1,1];return Ur.$15n([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(function(H){return new tg(H[0].map(function(X){var D=new pm(k.x+t[0]*(2*!!(1&X)-1),k.y+t[1]*(2*!!(2&X)-1),k.z+t[2]*(2*!!(4&X)-1));return new Wm(D,new pm(H[1]))}))}))},Ur.sphere=function(x){function f(a,n){a*=2*Y,n*=Y;var J=new pm(B(a)*p(n),B(n),p(a)*p(n));y.push(new Wm(U.$20n(J.$21n(P)),J))}x=x||{};for(var y,U=new pm(x.center||[0,0,0]),P=x.radius||1,V=x.slices||16,v=x.stacks||8,d=[],b=0;V>b;b++)for(var R=0;v>R;R++)y=[],f(b/V,R/v),R>0&&f((b+1)/V,R/v),v-1>R&&f((b+1)/V,(R+1)/v),f(b/V,(R+1)/v),d.push(new tg(y));return Ur.$15n(d)},Ur.cylinder=function(_){function K(w,e,v){var U=2*e*Y,E=L.$21n(B(U)).$20n(d.$21n(p(U))),R=g.$20n(j.$21n(w)).$20n(E.$21n(a)),C=E.$21n(1-J(v)).$20n(D.$21n(v));return new Wm(R,C)}_=_||{};for(var g=new pm(_.start||[0,-1,0]),N=new pm(_.end||[0,1,0]),j=N.$13n(g),a=_.radius||1,k=_.slices||16,D=j.$14n(),b=J(D.y)>.5,L=new pm(b,!b,0).$12n(D).$14n(),d=L.$12n(D).$14n(),n=new Wm(g,D.$11n()),t=new Wm(N,D.$14n()),o=[],U=0;k>U;U++){var E=U/k,i=(U+1)/k;o.push(new tg([n,K(0,E,-1),K(0,i,-1)])),o.push(new tg([K(0,i,0),K(0,E,0),K(1,E,0),K(1,i,0)])),o.push(new tg([t,K(1,i,1),K(1,E,1)]))}return Ur.$15n(o)};var pm=function(O,M,I){var z=this;3==arguments.length?(z.x=O,z.y=M,z.z=I):"x"in O?(z.x=O.x,z.y=O.y,z.z=O.z):(z.x=O[0],z.y=O[1],z.z=O[2])};pm.prototype={clone:function(){return new pm(this.x,this.y,this.z)},$11n:function(){return new pm(-this.x,-this.y,-this.z)},$20n:function(x){return new pm(this.x+x.x,this.y+x.y,this.z+x.z)},$13n:function(T){return new pm(this.x-T.x,this.y-T.y,this.z-T.z)},$21n:function(g){return new pm(this.x*g,this.y*g,this.z*g)},$16n:function(J){return new pm(this.x/J,this.y/J,this.z/J)},$23n:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lerp:function(r,a){return this.$20n(r.$13n(this).$21n(a))},length:function(){return d(this.$23n(this))},$14n:function(){return this.$16n(this.length())},$12n:function(F){var N=this;return new pm(N.y*F.z-N.z*F.y,N.z*F.x-N.x*F.z,N.x*F.y-N.y*F.x)}};var Wm=function(W,O,g){var G=this;G.$24n=new pm(W),G.$22n=new pm(O),G.uv=g?new pm(g):null};Wm.prototype={clone:function(){var S=this;return new Wm(S.$24n.clone(),S.$22n.clone(),S.uv?S.uv.clone():null)},flip:function(){this.$22n=this.$22n.$11n()},$18n:function(z,f){var L=this;return new Wm(L.$24n.lerp(z.$24n,f),L.$22n.lerp(z.$22n,f),L.uv?L.uv.lerp(z.uv,f):null)}};var Kb=function(g,u){this.$22n=g,this.w=u};Kb.$17n=function($,L,a){var G=L.$13n($).$12n(a.$13n($)).$14n();return new Kb(G,G.$23n($))},Kb.prototype={clone:function(){return new Kb(this.$22n.clone(),this.w)},flip:function(){var v=this;v.$22n=v.$22n.$11n(),v.w=-v.w},$5n:function(M,b,$,I,S){for(var p=this,V=0,C=1,h=2,B=3,E=0,Z=[],r=0;r<M.$9n.length;r++){var K=p.$22n.$23n(M.$9n[r].$24n)-p.w,y=-k>K?h:K>k?C:V;E|=y,Z.push(y)}switch(E){case V:(p.$22n.$23n(M.$8n.$22n)>0?b:$).push(M);break;case C:I.push(M);break;case h:S.push(M);break;case B:for(var T=[],u=[],r=0;r<M.$9n.length;r++){var i=(r+1)%M.$9n.length,z=Z[r],H=Z[i],n=M.$9n[r],x=M.$9n[i];if(z!=h&&T.push(n),z!=C&&u.push(z!=h?n.clone():n),(z|H)==B){var K=(p.w-this.$22n.$23n(n.$24n))/p.$22n.$23n(x.$24n.$13n(n.$24n)),j=n.$18n(x,K);T.push(j),u.push(j.clone())}}T.length>=3&&I.push(new tg(T,M.$10n)),u.length>=3&&S.push(new tg(u,M.$10n))}}};var tg=function(c,n){var p=this;p.$9n=c,p.$10n=n,p.$8n=Kb.$17n(c[0].$24n,c[1].$24n,c[2].$24n)};tg.prototype={clone:function(){var s=this.$9n.map(function(U){return U.clone()});return new tg(s,this.$10n)},flip:function(){this.$9n.reverse().map(function(L){L.flip()}),this.$8n.flip()}};var fm=function(M){var z=this;z.$8n=null,z.front=null,z.back=null,z.$4n=[],M&&z.$7n(M)};fm.prototype={clone:function(){var M=this,O=new fm;return O.$8n=M.$8n&&M.$8n.clone(),O.front=M.front&&M.front.clone(),O.back=M.back&&M.back.clone(),O.$4n=M.$4n.map(function(X){return X.clone()}),O},$6n:function(){for(var O=this,$=0;$<O.$4n.length;$++)O.$4n[$].flip();O.$8n.flip(),O.front&&O.front.$6n(),O.back&&O.back.$6n();var S=O.front;O.front=O.back,O.back=S},$1n:function(R){var Z=this;if(!Z.$8n)return R.slice();for(var m=[],J=[],X=0;X<R.length;X++)Z.$8n.$5n(R[X],m,J,m,J);return Z.front&&(m=Z.front.$1n(m)),J=Z.back?Z.back.$1n(J):[],m.concat(J)},$3n:function(V){var e=this;e.$4n=V.$1n(e.$4n),e.front&&e.front.$3n(V),e.back&&e.back.$3n(V)},$2n:function(){var R=this,P=R.$4n.slice();return R.front&&(P=P.concat(R.front.$2n())),R.back&&(P=P.concat(R.back.$2n())),P},$7n:function(R){var m=this;if(R.length){m.$8n||(m.$8n=R[0].$8n.clone());for(var s=[],Z=[],Q=0;Q<R.length;Q++)this.$8n.$5n(R[Q],m.$4n,m.$4n,s,Z);s.length&&(m.front||(m.front=new fm),this.front.$7n(s)),Z.length&&(m.back||(m.back=new fm),m.back.$7n(Z))}}};var Vj="symbol",sl=T.Symbol=function(K,i,C){var Q=this;w(sl,Q),Q.s3(20,20,20),Q.s({"all.visible":!1,shape:"rect"}),Q.setIcon(K,i,C)};K("Symbol",f,{setIcon:function($,Z,e){var f,A=this;return sl.superClass.setIcon.call(A,$),$?(f={for3d:!0,face:"center",position:44,names:[$]},e&&(f.transaprent=!0),Z&&(f.autorotate=Z),A.addStyleIcon(Vj,f)):A.removeStyleIcon(Vj),A.setWidth(o.getImageWidth(l.getImage($),A)||20),f}});var Pn=T.CSGNode=function(){w(Pn,this),this.s({shape:"rect","attach.thickness":1.001})},Vl={position:1,width:1,height:1,rotation:1,rotationX:1,rotationZ:1,rotationMode:1,tall:1,elevation:1,"s:attach.cull":1,"s:attach.operation":1};K("CSGNode",f,{_22Q:function(){return ei},onPropertyChanged:function(d){var h=this,p=h.getHost();Pn.superClass.onPropertyChanged.call(h,d),Vl[d.property]&&(p instanceof Ml||p instanceof Pn)&&p.fp("csgNodeChange",!0,!1)}});var ei=function(N,L){w(ei,this,[N,L])};e(ei,O.Node3dUI,{_80o:function(o,q,j){var N=this;N._shape3d?ei.superClass._80o.call(N,o,q,j):(Z(N.gv),ul.forEach(function(v){G(N,o,q,N[v],j)}))},validate:function(z,t){var K=this,E=K.gv,H=K.data;if(H.s("shape3d"))return ei.superClass.validate.call(K,z,t),K._shape3d=!0,void 0;K._shape3d=!1;var x=L(H,E.getMat(H)),C=z&&z.uv;K.vf2("csg",C);for(var w=0;6>w;w++)for(var Z=mc[w],g=kd[w],v=K.vf2(Z,C,t),U=v.mat||x,D=v.vs,f=v.uv,F=v.tuv,M=0;2>M;M++){var o=i[g+3*M],A=i[g+3*M+1],h=i[g+3*M+2];if(c(D,U,[S[3*o],S[3*o+1],S[3*o+2]]),c(D,U,[S[3*A],S[3*A+1],S[3*A+2]]),c(D,U,[S[3*h],S[3*h+1],S[3*h+2]]),F)if(f){var k=8*w;F.push(f[2*o-k],f[2*o+1-k],f[2*A-k],f[2*A+1-k],f[2*h-k],f[2*h+1-k])}else F.push(N[2*o],N[2*o+1],N[2*A],N[2*A+1],N[2*h],N[2*h+1])}Jf(K,z,t)},vf2:function(i,a,B){var N,Z=this,q=Z.gv.getFaceVisible(Z.data,i);return N=u(Z,i,B),N.vs=[],N.tuv=q&&(N.texture||a)?[]:t,N.visible=q,N}});var Ml=T.CSGShape=function(){var E=this;w(Ml,E),E.s({"shape.background":t,"shape.border.width":8}),E.setTall(240),E.setElevation(120),E.setThickness(14)};K("CSGShape",M,{IRotatable:!1,_22Q:function(){return vd},setRotationX:function(){},setRotation:function(){},setRotationZ:function(){},setSegments:function(){}});var vd=function(y,g){w(vd,this,[y,g])};e(vd,O.Shape3dUI,{_80o:function(n,x,W){var V=this;V.undrawable||(Z(V.gv),ul.forEach(function(E){G(V,n,x,V[E],W)}))},validate:function(I,d){var O=this,o=O.data,_=o.getPoints();if(O.undrawable=_.size()<2)return O.clear(),void 0;var L=o.isClosePath(),x=$(o._thickness/2,k),z=P(_,t,t,L);ul.forEach(function(e){O.vf(e,I&&I.uv,!0,d)}),L&&(O.left.visible=!1,O.right.visible=!1),O._12O(z,x),O._20Q(z),Jf(O,I,d)}});var en=T.DoorWindow=function(){var t=this;w(en,t),t.setElevation(100),t.s3(100,200,14)};K("DoorWindow",Pn,{IDoorWindow:!0,toggle:function(r){this.setExpanded(!this.s(H),r)},isExpanded:function(){return this.s(H)},setExpanded:function(P,B){var Q,s=this,Y=s.$25n,N=s.getDataModel(),i=s.s(H);if(N&&(Q=N.getHistoryManager()),Y&&(Y.stop(!0),delete s.$25n),i!==P){Q&&Q.beginInteraction();var g=P?s.s("dw.end"):s.s("dw.start");s.s(H,P),B=b(B),B?(i=s.s(h),B.action=function(n){s.s(h,i+(g-i)*n)},B.finishFunc=function(){Q&&Q.endInteraction()},s.$25n=E(B)):(s.s(h,g),Q&&Q.endInteraction())}},getMat:function(){var p=this,U=p.s("dw.s3"),o=p.s("dw.t3"),v=p.s("dw.flip"),e=p.s(h);if(U||e||o||v){var B=[];if(v&&B.push({r3:[0,Y,0]}),U&&B.push({s3:U}),e){U=p.s3();var b=p.s("dw.axis"),r=U[0]/2,K=U[1]/2;U[2]/2,b===X?B.push({t3:[r,0,0]},{r3:[0,-e,0]},{t3:[-r,0,0]}):b===n?B.push({t3:[-r,0,0]},{r3:[0,e,0]},{t3:[r,0,0]}):b===y?B.push({t3:[0,-K,0]},{r3:[-e,0,0]},{t3:[0,K,0]}):b===Q?B.push({t3:[0,K,0]},{r3:[e,0,0]},{t3:[0,-K,0]}):b===j?B.push({r3:[0,e,0]}):b===W&&B.push({r3:[e,0,0]})}return o&&B.push({t3:o}),D(B)}return t}});var Yq=T.CSGBox=function(){var S=this;w(Yq,S),S.setElevation(100),S.s3(100,200,100)};K("CSGBox",Pn,{ICSGBox:!0,toggleFace:function(j,u){this.setFaceExpanded(j,!this.s(j+g),u)},isFaceExpanded:function(A){return this.s(A+g)},setFaceExpanded:function(K,F,d){var W=this,h=W.$25n,m=W.s(K+g);if(h&&(h.stop(!0),delete W.$25n),m!==F){var _=F?W.s(K+".end"):W.s(K+".start");W.s(K+g,F),d=b(d),d?(m=W.s(K+v),d.action=function(l){W.s(K+v,m+(_-m)*l)},W.$25n=E(d)):W.s(K+v,_)}},getFaceMat:function(N){var C=this,d=C.s(N+v);if(!d)return t;var e=C.s(N+".axis"),c=C.s3(),b=c[0]/2,s=c[1]/2,T=c[2]/2,i=[];return N===z&&(e===X?i.push({t3:[b,0,-T]},{r3:[0,-d,0]},{t3:[-b,0,T]}):e===n?i.push({t3:[-b,0,-T]},{r3:[0,d,0]},{t3:[b,0,T]}):e===y?i.push({t3:[0,-s,-T]},{r3:[-d,0,0]},{t3:[0,s,T]}):e===Q?i.push({t3:[0,s,-T]},{r3:[d,0,0]},{t3:[0,-s,T]}):e===j?i.push({t3:[0,0,-T]},{r3:[0,d,0]},{t3:[0,0,T]}):e===W&&i.push({t3:[0,0,-T]},{r3:[d,0,0]},{t3:[0,0,T]})),N===x&&(e===X?i.push({t3:[-b,0,T]},{r3:[0,-d,0]},{t3:[b,0,-T]}):e===n?i.push({t3:[b,0,T]},{r3:[0,d,0]},{t3:[-b,0,-T]}):e===y?i.push({t3:[0,-s,T]},{r3:[d,0,0]},{t3:[0,s,-T]}):e===Q?i.push({t3:[0,s,T]},{r3:[-d,0,0]},{t3:[0,-s,-T]}):e===j?i.push({t3:[0,0,T]},{r3:[0,d,0]},{t3:[0,0,-T]}):e===W&&i.push({t3:[0,0,T]},{r3:[d,0,0]},{t3:[0,0,-T]})),N===X&&(e===X?i.push({t3:[b,0,T]},{r3:[0,-d,0]},{t3:[-b,0,-T]}):e===n?i.push({t3:[b,0,-T]},{r3:[0,d,0]},{t3:[-b,0,T]}):e===y?i.push({t3:[b,-s,0]},{r3:[0,0,-d]},{t3:[-b,s,0]}):e===Q?i.push({t3:[b,s,0]},{r3:[0,0,d]},{t3:[-b,-s,0]}):e===j?i.push({t3:[b,0,0]},{r3:[0,d,0]},{t3:[-b,0,0]}):e===W&&i.push({t3:[b,0,0]},{r3:[0,0,d]},{t3:[-b,0,0]})),N===n&&(e===X?i.push({t3:[-b,0,-T]},{r3:[0,-d,0]},{t3:[b,0,T]}):e===n?i.push({t3:[-b,0,T]},{r3:[0,d,0]},{t3:[b,0,-T]}):e===y?i.push({t3:[-b,-s,0]},{r3:[0,0,d]},{t3:[b,s,0]}):e===Q?i.push({t3:[-b,s,0]},{r3:[0,0,-d]},{t3:[b,-s,0]}):e===j?i.push({t3:[-b,0,0]},{r3:[0,d,0]},{t3:[b,0,0]}):e===W&&i.push({t3:[-b,0,0]},{r3:[0,0,d]},{t3:[b,0,0]})),N===y&&(e===X?i.push({t3:[b,-s,0]},{r3:[0,0,d]},{t3:[-b,s,0]}):e===n?i.push({t3:[-b,-s,0]},{r3:[0,0,-d]},{t3:[b,s,0]}):e===y?i.push({t3:[0,-s,T]},{r3:[-d,0,0]},{t3:[0,s,-T]}):e===Q?i.push({t3:[0,-s,-T]},{r3:[d,0,0]},{t3:[0,s,T]}):e===j?i.push({t3:[0,-s,0]},{r3:[0,0,d]},{t3:[0,s,0]}):e===W&&i.push({t3:[0,-s,0]},{r3:[d,0,0]},{t3:[0,s,0]})),N===Q&&(e===X?i.push({t3:[b,s,0]},{r3:[0,0,-d]},{t3:[-b,-s,0]}):e===n?i.push({t3:[-b,s,0]},{r3:[0,0,d]},{t3:[b,-s,0]}):e===y?i.push({t3:[0,s,-T]},{r3:[-d,0,0]},{t3:[0,-s,T]}):e===Q?i.push({t3:[0,s,T]},{r3:[d,0,0]},{t3:[0,-s,-T]}):e===j?i.push({t3:[0,s,0]},{r3:[0,0,d]},{t3:[0,-s,0]}):e===W&&i.push({t3:[0,s,0]},{r3:[d,0,0]},{t3:[0,-s,0]})),D(i)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);