// import React from "react";

// const styleSheet = `
// @keyframes shimmer {
//   0% { background-position: -400px 0; }
//   100% { background-position: 400px 0; }
// }
// .skeleton {
//   background: #e0e0e0;
//   border-radius: 4px;
//   margin-bottom: 12px;
//   min-height: 20px;
//   position: relative;
//   overflow: hidden;
// }
// .skeleton::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background: linear-gradient(90deg, rgba(224,224,224,0) 0%, rgba(200,200,200,0.5) 50%, rgba(224,224,224,0) 100%);
//   animation: shimmer 1.5s infinite;
//   background-size: 400px 100%;
// }
// `;

// if (
//   typeof document !== "undefined" &&
//   !document.getElementById("skeleton-style")
// ) {
//   const style = document.createElement("style");
//   style.id = "skeleton-style";
//   style.innerHTML = styleSheet;
//   document.head.appendChild(style);
// }

// function CardSkeleton() {
//   return (
//     <div
//       style={{
//         width: '100%',
//         maxWidth: 300,
//         borderRadius: '12px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//         paddingBottom: 16,
//         margin: 8,
//         background: '#fff',
//       }}
//     >
//       {/* Flag */}
//       <div
//         className="skeleton"
//         style={{
//           width: '100%',
//           height: 150,
//           borderRadius: '12px 12px 0 0',
//           marginBottom: 16,
//         }}
//       />
//       {/* Country Name */}
//       <div
//         className="skeleton"
//         style={{ width: '70%', height: 28, marginBottom: 12, marginLeft: 8 }}
//       />
//       {/* Region */}
//       <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: 8, marginLeft: 8 }}>
//         <span style={{ fontWeight: 500, marginRight: 6 }}>Region:</span>
//         <div className="skeleton" style={{ width: 80, height: 18 }} />
//       </div>
//       {/* Capital */}
//       <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: 8, marginLeft: 8 }}>
//         <span style={{ fontWeight: 500, marginRight: 6 }}>Capital:</span>
//         <div className="skeleton" style={{ width: 80, height: 18 }} />
//       </div>
//       {/* Population */}
//       <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginLeft: 8 }}>
//         <span style={{ fontWeight: 500, marginRight: 6 }}>Population:</span>
//         <div className="skeleton" style={{ width: 100, height: 18 }} />
//         <span style={{ marginLeft: 4 }}>people</span>
//       </div>
//     </div>
//   );
// }

// function CountryDetailSkeleton() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 32,
//         padding: 16,
//         alignItems: 'center',
//         width: '100%',
//         maxWidth: 1200,
//         margin: '0 auto',
//       }}
//     >
//       {/* Back Button */}
//       <div style={{ alignSelf: 'flex-start', marginBottom: 8 }}>
//         <div className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }} />
//       </div>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           width: '100%',
//           gap: 32,
//         }}
//       >
//         {/* Flag and Info */}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             gap: 32,
//             flexWrap: 'wrap',
//             width: '100%',
//             justifyContent: 'center',
//           }}
//         >
//           {/* Flag */}
//           <div
//             className="skeleton"
//             style={{
//               width: 320,
//               maxWidth: '90vw',
//               height: 200,
//               borderRadius: 16,
//               marginBottom: 16,
//               flexShrink: 0,
//             }}
//           />
//           {/* Info */}
//           <div style={{ flex: 1, minWidth: 260, maxWidth: 500 }}>
//             {/* Country Name */}
//             <div className="skeleton" style={{ width: '60%', height: 40, marginBottom: 24, borderRadius: 8 }} />
//             <div style={{ display: 'flex', flexDirection: 'row', gap: 32, flexWrap: 'wrap' }}>
//               {/* List One */}
//               <div style={{ flex: 1, minWidth: 120 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Region:</span>
//                   <div className="skeleton" style={{ width: 80, height: 18 }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Capital:</span>
//                   <div className="skeleton" style={{ width: 80, height: 18 }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Population:</span>
//                   <div className="skeleton" style={{ width: 100, height: 18 }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Languages:</span>
//                   <div className="skeleton" style={{ width: 120, height: 18 }} />
//                 </div>
//               </div>
//               {/* List Two */}
//               <div style={{ flex: 1, minWidth: 120 }}>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Currencies:</span>
//                   <div className="skeleton" style={{ width: 80, height: 18 }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Native name:</span>
//                   <div className="skeleton" style={{ width: 100, height: 18 }} />
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
//                   <span style={{ fontWeight: 500, marginRight: 6 }}>Top Level Domain:</span>
//                   <div className="skeleton" style={{ width: 60, height: 18 }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Border Countries */}
//         <div style={{ marginTop: 24, width: '100%' }}>
//           <span style={{ fontWeight: 600, fontSize: 20, marginRight: 12 }}>Border Countries:</span>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
//             {[1,2,3].map((i) => (
//               <div key={i} className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function LoadingLayout({ type = "card", count = 8 }) {
//   if (type === "country") {
//     return <CountryDetailSkeleton />;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         padding: "2rem",
//       }}
//     >
//       {Array.from({ length: count }).map((_, i) => (
//         <CardSkeleton key={i} />
//       ))}
//     </div>
//   );
// }
