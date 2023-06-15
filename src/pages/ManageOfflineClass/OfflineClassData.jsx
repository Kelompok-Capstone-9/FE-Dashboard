// import Cover from "../../elements/Card/Cover"
// import imgCover from '../../assets/icons/Appreciation 1.svg'
// import PopUp from "../../components/PopUp/PopUp"
// import add from '../../assets/icons/add.svg'
// import { useNavigate } from "react-router-dom"
// import InputSearch from "../../elements/InputSearch/InputSearch"
// import addSmall from '../../assets/icons/add_small.svg'
// import DetailProduct from "../../components/DetailProduct.jsx/DetailProduct"
// import { useState } from "react"

// const OfflineClassData = () => {
//     const navigate = useNavigate()
    
//     const [offlineClass, setOfflineClass] = useState([
//         {
//             id:1,
//             img:"https://source.unsplash.com/random/?profile",
//             text:'Zoom',
//             date:'May 14th,2023',
//             time:'1PM - 4PM',
//             codeZoom:'qwE-mHj-Poi'
//         },
//         {
//             id:2,
//             img:"https://source.unsplash.com/random/?profile",
//             text:'Zoom',
//             date:'May 14th,2023',
//             time:'1PM - 4PM',
//             codeZoom:'qwE-mHj-Poi'
//         },
//         {
//             id:3,
//             img:"https://source.unsplash.com/random/?profile",
//             text:'Zoom',
//             date:'May 14th,2023',
//             time:'1PM - 4PM',
//             codeZoom:'qwE-mHj-Poi'
//         },
//         {
//             id:4,
//             img:"https://source.unsplash.com/random/?profile",
//             text:'Zoom',
//             date:'May 14th,2023',
//             time:'1PM - 4PM',
//             codeZoom:'qwE-mHj-Poi'
//         },
//         {
//             id:5,
//             img:"https://source.unsplash.com/random/?profile",
//             text:'Zoom',
//             date:'May 14th,2023',
//             time:'1PM - 4PM',
//             codeZoom:'qwE-mHj-Poi'
//         },
//     ])

//     return(
//         <>
//             <Cover
//                 text={'Manage Online Class'}
//                 list1={'Class Data'}
//                 img={imgCover}
//             />
//             <div className='row mt-5 mb-5'>
//                 <div className="col-12 d-flex flex-row justify-content-between">
//                     <p style={{color:'var(--Neutral-Black-100)', fontSize:'28px', fontWeight:'700'}} className="p-0 m-0">Class Data</p>
//                     <div className="d-flex flex-row">
//                         <div>
//                             <InputSearch
//                                 placeholder={'Search Class'}
//                             />
//                         </div>
//                         <button className="btn btn-save btn-add pe-4 ps-4 ms-3">
//                             Add Class
//                             <img src={addSmall} className="ms-4" alt="" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="col-12">
//                 {
//                     offlineClass.length > 0 ? (
//                         offlineClass.map((offlineClass) =>{
//                             return(
//                                 <DetailProduct
//                                     img={offlineClass.img}
//                                     text={offlineClass.text}
//                                     date={offlineClass.data}
//                                     time={offlineClass.time}
//                                     codeZoom={offlineClass.codeZoom}
//                                 />
//                             )
//                         }))
//                         :
//                         (
//                             <p className="text-center mt-5">Belum ada kelas offline yang tersedia</p>
//                         )
//                 }
//                 </div>
//             </div>
//             <div style={{position:'fixed', bottom:'5vw', right:'5vw'}}>
//                 <PopUp
//                     imgBtn={add}
//                     className={'btn rounded-circle popUp p-3'}
//                 />
//             </div>
//         </>
//     )
// }

// export default OfflineClassData
