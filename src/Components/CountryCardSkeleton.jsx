
const CountryCardSkeleton = () => {
  return (
    <div
    style={{
      width: '100%',
      maxWidth: 300,
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingBottom: 16,
      margin: 8,
      background: '#fff',
    }}
  >
    {/* Flag */}
    <div
      className="skeleton"
      style={{
        width: '100%',
        height: 150,
        borderRadius: '12px 12px 0 0',
        marginBottom: 16,
      }}
    />
    {/* Country Name */}
    <div
      className="skeleton"
      style={{ width: '70%', height: 28, marginBottom: 12, marginLeft: 8 }}
    />
    {/* Region */}
    <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: 8, marginLeft: 8 }}>
      <span style={{ fontWeight: 500, marginRight: 6 }}>Region:</span>
      <div className="skeleton" style={{ width: 80, height: 18 }} />
    </div>
    {/* Capital */}
    <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: 8, marginLeft: 8 }}>
      <span style={{ fontWeight: 500, marginRight: 6 }}>Capital:</span>
      <div className="skeleton" style={{ width: 80, height: 18 }} />
    </div>
    {/* Population */}
    <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginLeft: 8 }}>
      <span style={{ fontWeight: 500, marginRight: 6 }}>Population:</span>
      <div className="skeleton" style={{ width: 100, height: 18 }} />
      <span style={{ marginLeft: 4 }}>people</span>
    </div>
  </div>
);
}

export default CountryCardSkeleton;
