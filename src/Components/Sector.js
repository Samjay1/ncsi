const Sector = ({sector_description,sector_title})=>{
    let checker = sector_description===undefined ? 0 : sector_description.length
   
    return(
        <>
            {/* <!-- SUB-SECTOR TITLE --> */}
            <div className="sector mt-2 animate__animated animate__flipInX">
                <div className="sector-head sector-body pl-4 d-flex border mb-3 p-2">
                    <p className={checker!==0 ? "h5 text-uppercase d-flex text-white":  "h5 text-uppercase d-flex text-white" }>{sector_title}</p>
                </div>

                <div className={checker===0 ?"shadow-lg rounded-xl ": " defaultRounded defaultBorder pt-2" }>
                    <div className="pl-4 pr-4">
                        <p className="small text-justify">{sector_description} </p>
                    </div> 
                </div>
            </div>
            {/* <!-- END SUB-SECTOR TITLE --> */}
        </>
    );
}

export default Sector;