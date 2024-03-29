import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import * as S from "./Profile.styled";

import { UploadSimple } from "@phosphor-icons/react";
import profilePng from "../../assets/profilePng.png";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { db, storage } from "../../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const Profile = () => {
  const { user, setUser, storageData, handleLogoutUser } =
    useContext<any>(AuthContext);

  const [name, setName] = useState(user && user?.name);

  const [imageAvatar, setImageAvatar] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(user ? user.avatarUrl : "");

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (
        (image && image.type === "image/jpeg") ||
        image.type === "image/png"
      ) {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        alert("Envie uma imagem do tipo png ou jpg.");
        setImageAvatar(null);
        return;
      }
    }
  };

  const handleUploadProfile = () => {
    if (imageAvatar !== null) {
      const currentUid = user?.uid;

      const storageRef = ref(
        storage,
        `images/${currentUid}/${imageAvatar?.name}`
      );

      uploadBytes(storageRef, imageAvatar).then((response) => {
        getDownloadURL(response.ref).then(async (downloadURL) => {
          let imageUrl = downloadURL;

          const docRef = doc(db, "users", user.uid);

          await updateDoc(docRef, {
            name: name,
            avatarUrl: imageUrl,
          })
            .then(() => {
              let data = {
                ...user,
                name: name,
                avatarUrl: imageUrl,
              };
              setUser(data);
              storageData(data);
              alert("Perfil atualizado com sucesso");
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    }
  };

  const handleSubmitFile = async (e: any) => {
    e.preventDefault();

    if (imageAvatar === null && name !== "") {
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, {
        name: name,
      })
        .then(() => {
          let data = {
            ...user,
            name: name,
          };
          setUser(data);
          storageData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name !== "" && imageAvatar !== null) {
      handleUploadProfile();
    }
  };

  return (
    <S.ProfileContainer>
      <Header />
      <S.FormContainer onSubmit={handleSubmitFile}>
        <S.LabelAvatar>
          <span>
            <UploadSimple size={25} />
          </span>
          <input type="file" accept="image/*" onChange={handleChangeFile} />
          {avatarUrl === null ? (
            <img
              src={profilePng}
              alt="Foto de perfil"
              width={190}
              height={190}
            />
          ) : (
            <img
              src={avatarUrl}
              alt="Foto de perfil"
              width={190}
              height={190}
            />
          )}
        </S.LabelAvatar>
        <Input
          placeholder={user && user.email}
          type="text"
          label="E-mail"
          autoComplete="off"
          disabled
          style={{ cursor: "not-allowed" }}
        />
        <Input
          placeholder="Digite seu novo nome"
          type="text"
          label="Nome"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <Button color="primary" width={100} height={45}>
            Salvar
          </Button>
          <Button
            color="danger"
            onClick={() => handleLogoutUser()}
            width={100}
            height={45}
          >
            Sair da conta
          </Button>
        </div>
      </S.FormContainer>
    </S.ProfileContainer>
  );
};
