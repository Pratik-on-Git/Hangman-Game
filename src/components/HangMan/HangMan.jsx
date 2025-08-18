import Level1 from '../../../public/images/1.svg'
import Level2 from '../../../public/images/2.svg'
import Level3 from '../../../public/images/3.svg'
import Level4 from '../../../public/images/4.svg'
import Level5 from '../../../public/images/5.svg'
import Level6 from '../../../public/images/6.svg'
import Level7 from '../../../public/images/7.svg'

function HangMan({ step }) {
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7];
    return(
        <div className="w-[600px] h-[600px]">
            <img 
            src={step>=images.length ? images[images.length - 1] : images[step]} 
            />
        </div>
    )
}

export default HangMan;
