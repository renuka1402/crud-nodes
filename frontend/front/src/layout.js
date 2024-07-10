import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
           <div>
    
    <div className="mainclass1">
      
    <ul>
        <li> <Link to="home">Home</Link></li>
        <li><Link to="stuinfo">Stuinfo</Link></li>
        <li><Link to="sturesult">sturesult</Link></li>
           <li><link to="ïnsert">insert</link></li>
           <li><link to="display">display</link></li>
        <li><Link to="stufees">stufees</Link></li>
        <li><Link to="teachardetails">Teachardetails</Link></li>
        <li> <Link to="teachersallery">teachersallary</Link></li>
   
       
        
      
       <li> <Link to ="search"><input type="search"  id="box" placeholder="Search Data"/></Link></li>
        
    </ul>


    </div>
</div>
<div id="showdata">
<Outlet/> 
</div>
<br/><br/><br/>

<div className="footer">
    <center>
   
    <br/>
    Contact No:-97860453434<br/>

    www.mycompany@.com
    <br/> <br/> <br/> <br/>
    </center>

</div>
        </>
    )
}
export default Layout;