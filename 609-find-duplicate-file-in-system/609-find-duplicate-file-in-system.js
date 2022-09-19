/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths) {
  const map = {};
  const solution = [];
  
  for (let i = 0; i < paths.length; i++) {
    let dir = paths[i].split(' ');
    let path = dir.shift();
    for (let j = 0; j < dir.length; j++) {
      let file = dir[j];
      dir[j] = path + '/' + file;
    }
    paths[i] = dir;
  }
  
  paths = paths.flat();
  
  for (let i = 0; i < paths.length; i++) {
    let content = paths[i].substring(paths[i].indexOf('(') + 1, paths[i].indexOf(')'));
    if (map[content] !== undefined) {
      map[content].push(paths[i].substring(0, paths[i].indexOf('(')));
    } else {
      map[content] = [paths[i].substring(0, paths[i].indexOf('('))];
    }
  }
  
  // for (let i = 0; i < paths.length; i++) {
  //   let content = paths[i].substring(paths[i].indexOf('(') + 1, paths[i].indexOf(')'));
  //   if (map[content] !== undefined) {
  //     map[content].push(paths[i].substring(0, paths[i].indexOf('(')));
  //   } else {
  //     map[content] = [paths[i].substring(0, paths[i].indexOf('('))];
  //   }
  // }
  
  for (let key in map) {
    if (map[key].length > 1) {
      solution.push(map[key]);
    }
  }
  
  return solution;
};