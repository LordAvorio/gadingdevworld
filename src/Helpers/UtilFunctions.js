
import { DataRefferalLink } from './ConstVariables'

export const handleReferralLink = (data, link) => {
    switch(data){
        case 'linkedin':
            window.open(DataRefferalLink.linkedin, '_blank');
            break;
        case 'github':
            window.open(DataRefferalLink.github, '_blank');
            break;
        case 'email':
            window.open(DataRefferalLink.email, '_blank');
            break;
        case 'outerlink':
            window.open(link, '_blank');
            break;
        default:
            break;      
    }
}