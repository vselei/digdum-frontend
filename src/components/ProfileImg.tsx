import styled from '@emotion/styled';

const Image = styled.img`
  width: var(--size-full);
`;

const ProfileImg = ({ src, size }: { src: string; size: string }) => {
  const ProfileImgContainer = styled.div`
    width: ${size};
    height: ${size};
    border-radius: var(--radius-full);
    overflow: hidden;
  `;

  return (
    <ProfileImgContainer>
      <Image
        src={src}
        alt="Imagem de perfil: clique para ir até a sua toca"
        width={40}
      />
    </ProfileImgContainer>
  );
};

export default ProfileImg;
