// import Cover from "../../elements/Card/Cover"
// import imgCover from '../../assets/icons/Appreciation 1.svg'
// import AddOfflineClass from "../../components/Form/AddOfflineClass"

// const OfflineInputData = () => {
//     return(
//         <div className="container-fluid" style={{backgroundColor:'#F6F6F6'}}>
//             <Cover
//                 text={'Manage Offline Class'}
//                 list1={'Class Data'}
//                 list3={'Input Data'}
//                 img={imgCover}
//             />
//             <div className="justify-content-around d-flex">
//                 <AddOfflineClass/>
//             </div>
//         </div>
//     )
// }

// export default OfflineInputData

  
    // useEffect(() => {
    //     fetchData();
    //     console.log(data);
    //   }, []);

    //   const fetchData = async () => {
    //     try {
    //       setIsLoad(true);
    //       const response = await axios.get('https://647612b1e607ba4797dd420e.mockapi.io/class');
    //       setData(response.data);
    //       setIsLoad(false);
    //       console.log(data, '1 ');
    //     } catch (error) {
    //       console.log(error);
    //       setIsLoad(false);
    //     }
    //   };


    // const handleDelete =(id) => {
    //     if(window.confirm('Are you sure you want to delete?'))
    //     console.log(id);
    //     // dispatch(deleteOnlineClass(id))
    //     deleteOnlineClass(id)
    // }

         // if (window.confirm('Are you sure you want to delete?')) {
        //     await classApi.delete(`/class/${id}`)
        //     .then((res) => {
        //         dispatch(deleteOnlineClass(id))
        //         setData(prevData => prevData.filter(item => item.id !== id));
        //         console.log(data, ' data');
        //         console.log('Data deleted successfully');
        //     })
        //     .catch((err) => {
        //         alert(err.message)
        //     })
        // }