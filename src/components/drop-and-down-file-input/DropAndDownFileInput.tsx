import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Icon, { FOLDER_ICON } from '../../assets/icons/Icon';
import { checkFileType } from '../../utils/';

import './styles.scss';

const MAX_INPUT_FILE_SIZE = 5000000;

interface DropAndDownFileInputProps {
  className: string;
  fileNameToShow?: string;
  onLoadFile: Function;
}

const DropAndDownFileInput: React.FC<DropAndDownFileInputProps> = ({ className, fileNameToShow,  onLoadFile }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropAreaRef = useRef<HTMLDivElement | null>(null);
  const [
    firstMountingOfEventListener,
    setFirstMountingOfEventListener,
  ] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  }, [error]);

  const preventDefault = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const addHighlightClass = () => {
    dropAreaRef.current?.classList.add('highlight');
  };

  const removeHighlightClass = () => {
    dropAreaRef.current?.classList.remove('highlight');
  };

  const loadFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      if (!checkFileType(files[0].type)) {
        setError('Unsupportable file type');
      } else if (files[0].size > MAX_INPUT_FILE_SIZE) {
        setError('File size more than 5MB');
      } else {
        setError('');
        onLoadFile(files[0]);
      }
    }
  };

  const handleDropFile = (event: any) => {
    const { files } = event.dataTransfer;
    loadFiles(files);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    loadFiles(files);
  };

  useLayoutEffect(() => {
    if (dropAreaRef && firstMountingOfEventListener) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropAreaRef.current?.addEventListener(eventName, preventDefault, false);
      });

      ['dragenter', 'dragover'].forEach((eventName) => {
        dropAreaRef.current?.addEventListener(
          eventName,
          addHighlightClass,
          false
        );
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        dropAreaRef.current?.addEventListener(
          eventName,
          removeHighlightClass,
          false
        );
      });
      ['drop'].forEach((eventName) => {
        dropAreaRef.current?.addEventListener(eventName, handleDropFile, false);
      });
      setFirstMountingOfEventListener(false);
    }

    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropAreaRef.current?.removeEventListener(
          eventName,
          preventDefault,
          false
        );
      });
      ['dragenter', 'dragover'].forEach((eventName) => {
        dropAreaRef.current?.removeEventListener(
          eventName,
          addHighlightClass,
          false
        );
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        dropAreaRef.current?.removeEventListener(
          eventName,
          removeHighlightClass,
          false
        );
      });
      ['drop'].forEach((eventName) => {
        dropAreaRef.current?.removeEventListener(
          eventName,
          handleDropFile,
          false
        );
      });
    };
  }, [dropAreaRef]);

  return (
    <div
      className={
        className
          ? `text-center file-input-wrapper ${className}`
          : 'text-center file-input-wrapper'
      }
    >
      <h4 className="mb-2">Choose a File</h4>
      <div
        ref={dropAreaRef}
        className="mx-auto my-0 border d-flex flex-column align-items-center justify-content-center file-input-drop-area"
      >
        <Icon
          className="mb-2"
          name={FOLDER_ICON}
          height="2rem"
          width="2rem"
        />
        <div>Drag files here</div>
        <div>
          or{' '}
          <strong
            role="button"
            className="text-dark"
            onClick={() => {
              inputRef.current?.click()
            }}
          >
            browse
          </strong>
        </div>
        <input
          ref={inputRef}
          className="d-none file-input"
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleChange}
        />
      </div>
      <h6 className={error ? 'mt-2 error' : 'mt-2'}>
        {error || fileNameToShow || 'No File Chosen'}
      </h6>
    </div>
  );
}

export default DropAndDownFileInput;
