import styled from 'styled-components';
import React, {useContext} from 'react';
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWIthName = (props) => {
  const {userInfo} = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  const { image, name } = props;
  return (
    <SContainer>
      <SImage height={160} src={image} alt="{name}" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
text-align:center;
`;

const SImage = styled.img`
border-radius:50%;
object-fit:cover;
aspect-ratio:1;
`;

const SName = styled.p`
font-size: 18px;
font-weight:bold;
margin:0;
color:#40514e;
`;

const SEdit = styled.span`
text-decoration:underline;
color:#aaa;
couror:pointer;
`