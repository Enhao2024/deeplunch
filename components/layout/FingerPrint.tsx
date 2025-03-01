'use client';

import { getBaseAPIUrl } from '@/utils/GeneralUtils';
import { getCurrentBrowserFingerPrint } from '@rajesh896/broprint.js';
import axios from 'axios';
import { Buffer } from 'buffer';
import { publicEncrypt } from 'crypto';
import { debounce } from 'radash';
import { useEffect, useRef } from 'react';

interface RequestBody {
  fingerprint: string;
}

const PUBLIC_KEY: string = process.env.REQUEST_BODY_KEY || '';

function FingerPrint() {
  // encrypt func
  const encryptWithPublicKey = (publicKey: string, data: RequestBody) => {
    const buffer = Buffer.from(JSON.stringify(data));
    const uint8Array = new Uint8Array(buffer);
    const encrypted = publicEncrypt(
      publicKey,
      uint8Array,
    );
    return encrypted.toString('base64');
  };

  // request func
  const request = () => {
    getCurrentBrowserFingerPrint().then(async (fingerprint) => {
      const baseUrl = getBaseAPIUrl();
      const requestBody: RequestBody = { fingerprint: fingerprint.toString() };
      const encryptedBody = encryptWithPublicKey(PUBLIC_KEY, requestBody);
      try {
        await axios.post(`${baseUrl}/user/visit`, {
          body: encryptedBody,
        });
      } catch (error) {
        console.log(`Request Failed for ${baseUrl}/user/visit`);
      }
    });
  };

  // debounce func
  const debouncedFunctionRef = useRef(debounce({ delay: 5000 }, request));

  useEffect(() => {
    debouncedFunctionRef.current();
  }, []);

  return null;
}

export default FingerPrint;
