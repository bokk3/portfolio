import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Boris Truyens - Webontwikkelaar';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <span
              style={{
                color: 'white',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              T
            </span>
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
            }}
          >
            truyens.pro
          </div>
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 32,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Webontwikkelaar & Digital Consultant
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: 24,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          Next.js • React • TypeScript • E-commerce
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}