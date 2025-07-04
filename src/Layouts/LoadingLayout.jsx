import React from "react";

const styleSheet = `
@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.skeleton {
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 12px;
  min-height: 20px;
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, rgba(224,224,224,0) 0%, rgba(200,200,200,0.5) 50%, rgba(224,224,224,0) 100%);
  animation: shimmer 1.5s infinite;
  background-size: 400px 100%;
}
`;

if (typeof document !== 'undefined' && !document.getElementById('skeleton-style')) {
  const style = document.createElement('style');
  style.id = 'skeleton-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

function CardSkeleton() {
  return (
    <div style={{
      width: 300,
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 16,
      margin: 8,
      background: '#fff',
    }}>
      {/* Flag */}
      <div className="skeleton" style={{ width: '100%', height: 150, borderRadius: '12px 12px 0 0', marginBottom: 16 }} />
      {/* Title */}
      <div className="skeleton" style={{ width: '70%', height: 28, marginBottom: 12 }} />
      {/* Region */}
      <div className="skeleton" style={{ width: '60%', height: 18, marginBottom: 8 }} />
      {/* Capital */}
      <div className="skeleton" style={{ width: '50%', height: 18, marginBottom: 8 }} />
      {/* Population */}
      <div className="skeleton" style={{ width: '65%', height: 18 }} />
    </div>
  );
}

function CountryDetailSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 48, padding: 32, alignItems: 'flex-start' }}>
      {/* Flag */}
      <div className="skeleton" style={{ width: 550, height: 400, borderRadius: 24, marginLeft: 80, marginRight: 32 }} />
      {/* Info */}
      <div style={{ flex: 1, marginRight: 80 }}>
        {/* Country Name */}
        <div className="skeleton" style={{ width: '60%', height: 40, margin: '0 auto 24px auto', borderRadius: 8 }} />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32 }}>
          {/* List One */}
          <div style={{ flex: 1 }}>
            <div className="skeleton" style={{ width: '80%', height: 22, marginBottom: 16 }} />
            <div className="skeleton" style={{ width: '70%', height: 22, marginBottom: 16 }} />
            <div className="skeleton" style={{ width: '60%', height: 22, marginBottom: 16 }} />
            <div className="skeleton" style={{ width: '90%', height: 22, marginBottom: 16 }} />
          </div>
          {/* List Two */}
          <div style={{ flex: 1 }}>
            <div className="skeleton" style={{ width: '80%', height: 22, marginBottom: 16 }} />
            <div className="skeleton" style={{ width: '70%', height: 22, marginBottom: 16 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoadingLayout({ type = "card", count = 8 }) {
  if (type === "country") {
    // Only one skeleton for country detail
    return <CountryDetailSkeleton />;
  }
  // Card grid skeletons
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
