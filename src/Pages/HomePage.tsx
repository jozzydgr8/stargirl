import {AmazonOutlined, EnvironmentOutlined, InstagramOutlined, MailOutlined, PinterestOutlined, YoutubeOutlined} from '@ant-design/icons'
import Services from '../component/Services'
import Youtube from '../component/Youtube'
const styles = {
    container:{
        height:"30vh", 
        backgroundColor:'white'
    },
    flexrow:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        gap:'5px'
    }
}
function HomePage() {
  return (
    <section>
        <div style={styles.container}>
        </div>  
        <div className="container-fluid">
            <h1 style={styles.flexrow}>
                Star Girl Tems
            </h1>
            <div style={styles.flexrow}>
                <EnvironmentOutlined style={{fontSize:'20px'}}/>
                <h2>America</h2>
            </div>
            <div style={styles.flexrow}>
               <h3> Fashion + Lifestyle creator</h3>
            </div>
            <div style={{...styles.flexrow, fontSize:'30px', gap:'20px'}}>
                <AmazonOutlined/>
                <InstagramOutlined/>
                <YoutubeOutlined/>
                <MailOutlined/>
                <PinterestOutlined/>
                
            </div>

            <div style={styles.flexrow}>
            <Services/>
            </div>

            <div style={styles.flexrow}>
            <Youtube/>
            </div>
        </div>
    </section>
  )
}

export default HomePage
