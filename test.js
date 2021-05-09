function Solution(){
  this.queue = []
  this.stack = []
  
this.pushCharacter = function(char){
  this.stack.push(char)
  }

this.enqueueCharacter= function(char){
   this.queue.unshift(char) 
}

this.popCharacter= function(char){
   return this.stack.pop() 
}

this.dequeueCharacter= function(char){ 
   return this.queue.shift()
}

}

const obj = new Solution()

obj.pushCharacter("2")