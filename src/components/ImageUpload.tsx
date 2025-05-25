import React, { useRef } from 'react';
import Button from './ui/Button';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  currentImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, currentImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <div className="space-y-4">
      {currentImage && (
        <img
          src={currentImage}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-lg"
        />
      )}
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Image
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;