import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter className='text-center text-white ' style={{ backgroundColor: '#1ED760' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <h4 className='text-light mb-3'>FIND YOUR TASTE</h4>
            <MDBCol lg='2'md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded '
              >
                <Link to={'https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw'}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmNlV_2dbl-6M8AmGxy4cPt_MCTVwM3VwMQ&usqp=CAU' className='w-100' />
                <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>ARJITH SINGH</p>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                
                </Link>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <Link to={'https://open.spotify.com/artist/3m49WVMU4zCkaVEKb8kFW7'} >
                <img src='data:image/jpeg;base64,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' className='w-100 ' height={97} />
                <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>ILAYARAJA</p>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
               
                </Link>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
              <Link to={'https://open.spotify.com/artist/2wPsNCwhEGb0KvChZ5DD52'}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaoW0geBuikwcrt7lxontXybAqs2zi7mJAn4DoYre6m5HO8J242HQsebktk_GtmD9eAU&usqp=CAU'height={95}  className='w-100 ' />
              <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>K.J YESHUDAS</p>
                <div
                  className='mask'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              
              </Link>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
               <Link to={'https://open.spotify.com/artist/1qFp8zDvsXyCsC5dqz8X4S'}>
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhIVFRIYGBISEREYGBIREhgSERISGBgZGRgYGBgcIS4lHB4sHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrISQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Nv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADwQAAICAQMCAwYEAwcDBQAAAAECABEDBBIhMUEFUWETIjJxgZEGQrHBUqHRFDNicpLh8SOy8BVDosLS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACgRAAICAgIBAwUAAwEAAAAAAAABAhEDIRIxBEFhcRMiMlGBI5GxFP/aAAwDAQACEQMRAD8A+O1CAlAQwJ0JDIiiEEhKIxRKJGoiKZpS4tRHY5SKDYLrzHYOeIbY7lrhjKLsx0NPlFUesjt14gYQAP3hPmH/AAOsfoopNrbOe+E3ZMgUDnvLy5CbpZ1sPhGRcauygg7XNcuicEHb1Fg7ueoAir2F430Y9No3eiEq7PPujaCBus9uf5GdfwvwZ8uI5C6pjGTZTKWdmPHCjrzQ+s6GlQOjIilXQKgJrjZ/E3IJAYsf855na8OdMOEoiBtyX8Xu9d1nb8Xf/wCXbiGTkvkf6f7PPZvDX04V2F42II2kK5U9yh5Udrquk1ZfFQoX2WFEJ/OR7R69GbpOxl9lmx41TWI7EEbHyDG5bcS3nuPAAsG6AvrMes/Cmbgo6soF7Cdrk88J2I4sdOvpDHImqkTcaf2nH1usL2zuSfIm6+k5Xsz2AI45Iqa00p3Dj81EH8p8jGqgPBB+kr8G+TD/AGbqe5Ff8SjgWjxVTqYsBN2Rx94D6MDzPBu4GhvdHCYC+I0KfL7zblxqoPQfrMy35RGg/wBJiUcqRzd36TSjbeREbT16R6JFEf6HrkLTRjERhE1osSRNj0HEK5SyFpCQtAZHnP1DzRnec/O8mogMud5z8rTTleY8hjUFCcky5DHZGmZzEYRTQDDaAYrCAYMIwYhjQBLEoQhOpDjFjFEBRGrHRhqCORIhTHI0rEw4XJzLR5RaOBjVbzhe3A69JjZ+ZHfpFbsKdHR0+PeQFW25IugvAJG4+ViadX+Icm1HJHRVvExCMU+EFT0qvLvxK0GdVwMWxbi29S1i1BXgFT1HXp02/KvKM9Ei7o8HpdQxfFptFHNxXydrL40wdciEpkF2F5DCqJYHjmzMer8Zd12liAWY0OBySa+Vs33M5DtZJPUwbiT8u26SRJzkzamVu3Xmz3PT+k7mm/EWpR8e7M4AZG3OfaGgKsbrHS6E8xvJoTTixOGDKp4YEEi+hsfpAs1rSbNFy9D6/wCFalNXkyUyvkxjE5dUONXBTo6WRYsjcOvlMWo0hRipHvAXx0K9Qb8p4rwbxE4dy0VbIze8vuujbfdK+lkj/me88K1q6nTqtk6nHY3MSd+MA2fWrH2loPV/yilepznShY63zGjHdWSR9qkRRXX6VFPl2mr4viUdg0ZNTpSvAFkfUznOjBrrvU62r1fv2B2Hy5EzFixNrJtBv0MpQ94eEe6PQzQdLfIb6R2LGFsRBZP1BxL3jbineoByxZE2bFfiAz8RaPxFZXkmhWLz5Jz87w8+SZMmSBoyQnI0x5HmnID5fymHI3MRhFu0UxhuYporCA0BoZi2iGKMGWZUVmNIhIIKw1E6UONWGsBBDEdDBiEsfpdK78qpI/i6L95eTTlTzN9SKdXsb6U65VoAtLuxB2RqqJRSsRoSBHogcqnmQDXU+g9fKZs7AdJmLHkg0QLHrzBKVIF0TWaotwCQgYkKexPc+Z5Mwtc0ZnXaKJLFiWboCOKFed3FqbHPX6SLqTp6Ee2JhKtyppxYpOMLY0Y2wsGHkcT2Hh+H3FG0cd55/SLZoMAVvnbfT5md/wDD+tO4oxUntX5h5V5z08EscE0u2dmFUehXwdNRp8qUPaojujdDvRSQt+R795zPwHvDHMSy4VB94DcFJDcP/EOk9H4fqU05dWFZM2LJsRupbaaI9bE4H4UUqiA48ijGMbe3xMB7uSyu5b5BAHNWOlV1580m5unoEo/ds6uu0pZxkxsjY/dVmx5FYFgBbUOlntMmpQCmrp3/AKz0HiOpIxsA27llTJt2e0XqWIFBhY+IABrsd55nLqjsYMKcdV7fMekriblHZz5ElLQrUsWC0tgqQa6Ag/0qJxIx6mq4PnAGVgeDwfynsY4YyOWPBP5eK8oZaNF3sdgQA8niMzEdu0RlyAAUD+sv2hK9OCJJsDiZNQ8QmSFlrp3mXdRhFo3DJFZniS8XleTaFIMZdtqiyfLtH5caYhbcv6/sJo8Kwna7E0G4/rORqX3ux52qKur+UlVuvQNCtTrnN80PQTG+RGvdwexH7wcrgzOw9YZRVUgA5Vr+vnEkxzP7tepiCZFmKMAmEYEUxRlSSRTGpBHKkSscrTpiVQ1MZPAFk9ABZJ8gJ6Hw/wADOO31OF9gW1QHi/8AGRdD0nN/D/iSYdTidxaIx3ULNEEWPvPpvjX4s0R05GJgzuhBCiyd3FHcOKnmed5WaE448cW0+2dvjxx/k9/8XueT1vjWNgB7MKoUKAvFAdJyMuoVh0sefeczU5bPEy+0I7zoxY+KGy+TevQ35GHaIyZOIr2/nFs9zqUqOKTTISZeHbuG4+7dHt7vfmUYl4bJsVmYFjQoWaHkO0BTKYySDexC+86Gj5IHnOfc6XhZG9d3SdGBpS2UxflR1cvgThQ6kMrc33B8jE+E4SM6EngMD59J1Nf4/jGM48YN1Rcj9IvwBjkZUxKdx+M7fiHezzVfSd2P6Llb1R1yUbSi9notbqsyf2vJlAZMeTZiY7GQZN5Ccfl5F888c9Zt/CmpXIhUYXRGwjGAGDY1SywNke8brqPuZs/H5OTSDHSKW1Ksrk0CoR2Yk/06mpwPAUfGgyO1MuIhMbu1uCRSgdaJDH0DeXXhpydGlJp/cdHXuyDGzsWGTHj3rdrhfbQA/wAPaux+tcTNqCcjDbW3ofQ9j6GM8U8VfI6lVDJkHwgVY6Fa7UP95j1LUgB8xR/iHQWe9TtguMUjkk+TbLcgluaI+nMsZl6AEnzPPMVi3L1Qc2dzc/SUSwN3QY/lHQyMp2x4xpG1crsDyABx05mdHIJXdwPKV0N0T57v1guvIYVx5dxFszRb0D8/PziMqjrcLO1zM+SGxJIJ24ineLbJxE74rEPSaZ1OHg2KIPnc8zn1JAKAbVvkdyfWbdD4jsDKfhbnpbAjy5iMmkV3Yq3uks1AWQtA187NfSRWm7C+jl5DFrOi+gYdaA46mzz0HziW05Brjjv0Edq/UUzMRR4q/wCREzGanTn5xJoSUomEwTGs0WRJtGAklkSohjQsaIpYZ6GdK6KIAnmGrkd4oGQSZrH+0lExQliFGsKXcoGXYlI43LoW6LBjE68dR6wVzkdK+e1b+9XByaliNpdiv8JY7ftHeLirbNyLz4AApLcsWvgV26c/OZCJRMJRc5nti9kImjSn3l+Yhvgtb8pl6SlOLHa4s7zeHoQabntfedtfCHXSLmQjHte225HIYc0SLoVXqZ4xMp856vQazfpyHJOLGLKb9gZh8IFc9iZZNPo6ITi70dDxvxJ3xrlZiBj2BMZA6L+Y/wCYjn7TH4nsZ01Ht1RWVCL3O5IA4RB5ChyQOs4Wv1pysDQFXyBV9Of5To6TUEYlQhWVT1YAgXz0PzMfG1tEpy5M3Lqk2FrPs8m4gDhrvkGunnV9zMgydACeOQLuvKYnyjoo6dwKH2kVrMaU70hUt7NzuXsG7Hdm7+YmjC1gg+Xb9Zz8c0b7EmolOVmoZuKP38xM7ZjVXxEufWA5hoDbCfJEu0Jm4inYwk2xbPF3BJkBk2xSXOrpR7LGXfg5CNqfmIHf0ELw7w4BfaOPVFbp/mb0nO8Q1BfIzFrvgV0C9gPSaMeT9jDMurDEMOSt8ebcAGv/ADrMjsewvuzE3zzxcFTUrNkBA9P/ADpGlHiATkJvk/aJMtn9YtmMnJmIxizLJMCQkzFkypJIhhymFkIrr/tBAgPKN0h29EBlgwJAYqYlj7kJid0tTGjt0NYwtBJlXBlnOtIQO5RggwovK0YCWDUhkkn2Y9D4LmRrViASO/QzrP8AhjC4sZdrE8D4rJ7AXPEqaP8ASdTR6t2ZV4biveLDrwANpBs3X1nRHKpR4yR1RyxcakrOgPw8Ccns86OuE0zBSAWCszBOu4DaBfct5dd2Z/7Nj068N/aAjsjKCq4rKsrA9SSDz6Cpk1WvWxixKAoyhTtVQW4pido5smh14URv4xZTnxhT/d4USuw22f1JjJUieqtGh/CcGVXbCSjrqnwhGfdicnccfLcruCkWTVjt1GLNpShZHBTIhoiun9RMmj1W3HkTtkbG3yZN4H/eZ2fGXLexysP77T42v1S0N/6B9xHlGPFNGRz8WlLsAoJdqAA6k+k7yfg3U1/7Yb+A5Bv+Xlf1mDwS/aBgfg7+RM9fh1FS2PBceT9QtHldV4PqMI/6mB1A/Nt3J/qWxOeSSAaFc1XpPpGHxBl6MR8jA1Pscv8AeYMbk/m2+zyf60oxZYpI1s+bOYDPPZ6z8O6Z72ZMmI/4gMyD/tb9ZxNT+Fs4+B0yjtsfbk/0PR+1yTtditnDbJ1iWcmP1OlfG1ZMboT2yIVv5X1mUmI2KwWm/wAI0ofIA3wKCzeoHQff95z2nU0Ob2enyOPjZwi38v2szVegHQ8Q1SncT8IKgrV3dHb9geJ5zI9knpfbyE26/hQt8gsT3voLPqanLZvKdEIqKNQW+uspjcC74MXZESTMDkWLuNY3FkTmmvVGKuCZJLkHsBUkkkBhoEWYe6LhkwskkkkACQ7giQmNF0gFkypUkzlYS4QgQhGiwEMgEhlw1sxJ1dMirhXKG/6iZa21/ErbD16gox6fmE5saCQoF8Hmr4vn/eMh0N0z7XRuu1laj3o3HO5YlmNkkkn1MyqY0NKxYQ+k9hqtK+Xw/TFEJbTsqMVBO1MmNXLNXQbtg+Z9Z5BV3FR2J5Pkvc/a57rwTx5k0mQ4y6ZC6KrUChLG3QX1pAbJ/iEpCLl9q7DEyeGaYoCp+IMbrpYNTqK8xacUI/dPXUaSQxo9rK9uZnLwC8VxAav7QZDnmMtALyMoIFm7+2sBW47T+U+8n+k8Tn6nR4H+LCoP8WO8Z+w93+UFnimeQnij+gGDUeAqfgy1/hyL/wDZf/zM+q0OYY0xhNyghiyUwB5sEDnzN13nUOSCc8hKDXQKOLrlHvEj4aFtxuc8mh9e85ZM9VmzBhTAMPJgGH85zc+ixt0BU/4Tx9jcClXZjhsZRebs3h5HwsD6EbT+4nPI84kpX0Au4JkuVck3+zAkQYRMqRkAqSSSKY0afHZPHCgk81YHbqP5czS2nSmamX4iv8BHYc80KYXZvjjrFabVsvAPuk2RtB6ggnnvRM7LnT5KAzbBuFq6FQVtQAWXgUAzdOp9ZOUmmdOPHCUe9+5w8emY8gcUTZIUGu1nvx0i2xkEiuVJuuarryP1nocmhv3w6FEWyUdS3CrwfhNcgdzd9YnUaMpjLAHaU4JBAZW78gGiLPU9R5GBZEx34jSbT6OAJKlmVLUcZUkuVAzEhCDLEaLMFJKkjmDBhdoqNLWAPIV/O/3hTCmEhhh4oGRWjqQbNLZP0r+s9F4RuKKWJIHwr0VV9FHAv+c8xp1LMFHcz2WmQKAB0AAnoeDHk3L+DRNqHiHviAZZaelQRhaLLSi8DdFaMHugs0WWglpKSFZbNFsZTNFM0lJGIzRLtCZoh2kZIxHaJZpGaKdpGSAL1GalPn2+c5REdqs1tXYfrFFjINxoFlE1Flpewy6qRfKXsgASSzJURmKMqWZURmLqVJJAYK5qXxDKFKjI21l2ldx2leBVeVAD6TJJNxT7GUmumSpKl1KMdr2FKkkkisxJJJJkYuWDBlx0zFy4Mu4bMXcvtBjjiN9D5X2uGwpWdPwLByWPbgfvPRoZz9Di2qq+Q5+c2Bp9B42NY4JFFpGgNKLxQaCXnQzDC8ovFbpW6IzDC0AtBuWiFiAoJY8AAWSfQSctCglot2nXx+FEYsmTLvQY7UYwvvtkri7HuryOTOGxkFOM2+PoYpminMstFMZOSMUxmfOxrgEnsBGO05+TUEOCDW01Y/nOXLJRQGKfC3UqR9IvZN76lm4Uixd9L+kyOrEm7uc9J7qxRRqVuhbZCIjUvgxW6VcsiDFlZiGVJJJsxJYEqWIDDhpmIJFUASeegESIwZSLAPBFQVNRod7C69Dfo8K8WLPrNj6RWHwgeq8Gc3DlqdHBnvrPpfEWDJDg0v8ARSHHpnN1OkZeeo85lnpQu7gC77VdzN4j4BmVd4xNt6ni6Hnx2nm+f4H0Hyi9foMsWrj0cKSXKnlkSS5UkKZi5JUsQpmNfh+INkF1tQFmvptXkj69PrO//wCrJnUqNOqNakurWKHQAV+8xanw44NMzMPfyOiHm9iUWr/MSo+kLwzFtUeZ5M6vG8ZZMqbX47LY8koJpPT7Ooku4sNL3T3rAM3Qd8XugmByCM3St0UWlFpNzNQ8NPoP4N8MVMIzMP8AqZbon8uO6AHzq/tPnCvPYaD8ZDHixY/Y37NApO8CyBQIFTk8vnOHGC+QNG/8beIsiLiXgZFbc1flHG0ffmfP3M3eK+JvnyF3Poqj4UXsBOazQ4MX04JPv1FBcxTGE5imMaRhWocKOe/l1nNeuwP1Nxmqy23HQRKmeZmlykLZrxZFZfeUWKG6vt05gnKw/MK9P94nD+YdqN/SCTEhLRgib6wCJN0omGTQCGDLJgyUmYkkkkQxYEILJJFHiEE9Jfs5JItstwWgSCI3HqKlSTow5pwemQlp6OjptbtIIPInrPDvxYyimUEeY/pKkn0eB/8Aoh/k2Xw5pQejRl0+i1XxoFc37+P3G+Zrg/UGcTxP8DZl97Awyp2HCZPsTR+h+kqSeT5uCEH9p6svGx5cfJrfseW1OmfGxV0ZWH5XUqfsYmVJPPo8Oa4ypGjT6R8hpEZj5IpY/wAhOrg/DmWx7TbiHnlYBvT3BbeXaSSdfiYY5JLkXxYoyVs9Rr9XiTTlBmD5DtIKYzReqLEsBXB7XODh4kknsxxxx2omyJJ6G3BZ5JIZMQEZIYMkkjKTCi6i2YSSSbMBvk9pJJDGTMT2komSSVXQrFsZl1WShQ6ngfvJJObPJqLoRnMlXJJPJYA8J94esZn/AHlSRofiwCZJJJjFSpJJNmJJJJAY/9k' className='w-100' />
                <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>SUSHIN SHYAM</p>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
               </Link>
                
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
               <Link to={'https://open.spotify.com/artist/1mYsTxnqsietFxj1OgoGbG'}>
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQx_xNW8zD8oN3C2a9Q0dtNiolCNbeKnx3g&usqp=CAU' className='w-100' />
               <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>A.R RAHMAN</p>
               <div
                 className='mask'
                 style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
               ></div>
               </Link>
                
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
               <Link to={'https://open.spotify.com/artist/2ae6PxICSOZHvjqiCcgon8'}>
               <img src='https://img.theweek.in/content/dam/week/news/entertainment/images/2020/8/16/sp-balasubrahmanyam-spb.jpg' className='w-100' />
               <p style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>S.P.B</p>
               <div
                 className='mask'
                 style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
               ></div>
               </Link>
               
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Spotify.com
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer