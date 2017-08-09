
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
<<<<<<< HEAD
  console.log(this);
=======
>>>>>>> 38f222ec23999e19968faed05df275c43ded6616
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
<<<<<<< HEAD
    console.log(this);

=======
>>>>>>> 38f222ec23999e19968faed05df275c43ded6616
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

<<<<<<< HEAD


=======
>>>>>>> 38f222ec23999e19968faed05df275c43ded6616
/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(/*...*/
) {
  // TODO: implement me!
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
<<<<<<< HEAD
Tree.prototype.getAncestorPath = function(/*...*/child
) {
  // TODO: implement me!
  var result = [];
  // for(var key in this){
  //   if(key === this){
  //     result.push(key)
  //   }
  // }


  if (this.children.child === child) {
    return result;
  } else {
    for (var i = 0; i < this.children.length; i++) {

      if (this.children[i].getAncestorPath(child)) {
        return result.push();
      }
    }
    return result;
  }


=======
Tree.prototype.getAncestorPath = function(/*...*/
) {
  // TODO: implement me!
>>>>>>> 38f222ec23999e19968faed05df275c43ded6616
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
<<<<<<< HEAD



var grandma = new Tree();
var mom = new Tree();
grandma.addChild(mom);
console.log(grandma.children.children);
grandma.getAncestorPath(mom)

=======
>>>>>>> 38f222ec23999e19968faed05df275c43ded6616
