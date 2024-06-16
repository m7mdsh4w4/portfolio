function accountDis(){
    const userx=document.getElementById('userx').value;
    const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer lip_eUZKckbe1KdC2N4Jq4QC");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://lichess.org/api/user/${userx}`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

const myusername = result.username;
const myperfs = result.perfs.bullet.rating;
const myperfs2 = result.perfs.blitz.rating;
const myperfs3 = result.perfs.rapid.rating;
const myperfs4 = result.perfs.classical.rating;
document.getElementById(`myusername`).innerHTML = myusername;
document.getElementById(`mybullet`).innerHTML = myperfs;
document.getElementById(`myblitz`).innerHTML = myperfs2;
document.getElementById(`myrapid`).innerHTML = myperfs3;
document.getElementById(`myclassical`).innerHTML = myperfs4;

  })
  .catch((error) => console.error(error));
}