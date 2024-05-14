import { useState } from 'react';
import './create-meet.css';
import BtnLarge from '../buttons/BtnLarge';

interface UploadImageProps {
  onImageUpload: (image: File) => void;
}

function UploadImage({ onImageUpload }: UploadImageProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      onImageUpload(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <section>
      {previewImage && (
        <div>
          <h2>미리보기</h2>
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }}
          />{' '}
          <br />
        </div>
      )}
      <label htmlFor="image-upload">대표 이미지 등록</label>
      <br /> <br />
      <BtnLarge
        text="파일선택"
        bgColor="bg-blue-500"
        onClick={() => document.getElementById('image-upload')?.click()}
      />
      <input id="image-upload" className="file-input" type="file" onChange={handleImageChange} />
    </section>
  );
}

export default UploadImage;
