// function Profile () {
//     return <h2>Profile page</h2>
// }

// export default Profile ;

import { useParams } from 'react-router-dom';

function Profile() {
  const { nickname } = useParams();
  return (
    <div>
      <h1>Trang cá nhân của {nickname}</h1>
    </div>
  );
}

export default Profile;
