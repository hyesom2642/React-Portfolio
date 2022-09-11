import HtmlLogo from '../../assets/icons/html.png';
import CssLogo from '../../assets/icons/css.png';
import JsLogo from '../../assets/icons/js.png';
import ReactLogo from '../../assets/icons/react.png';
import TsLogo from '../../assets/icons/typescript.png';

const ProfileData = [
  {
    id: 0,
    title: 'html',
    className: 'html logo',
    content: '쉽다는 이유로 대부분의 사람들이 간과하는 언어 이지만 저는 모든 페이지의 본질은 HTML에서 시작되기 때문에 매우 중요한 언어라고 생각합니다. 시맨틱한 마크업을 하여 정보의 의미를 집중하고 HTML을 의미에 맞게 잘 작성할 수 있습니다.',
    imageUrl: HtmlLogo,
  },
  {
    id: 1,
    title: 'css',
    className: 'css logo',
    content: 'CSS도 위의 HTML과 같이 쉽다고 생각하는 사람들이 많습니다. 하지만 쓰면 쓸수록 \'어떻게 하면 CSS를 좀 더 효율적으로 적용할 수 있을까?\' 라는 재사용성에 관한 생각을 많이 하게 되는 기술이라고 생각합니다. 그러하기 때문에 저는 SASS도 같이 공부하였습니다. Figma의 디자인 시안을 보고 대부분의 CSS작업과 레이아웃 배치, 반응형 페이지를 제작할 수 있습니다.',
    imageUrl: CssLogo,
  },
  {
    id: 2,
    title: 'javascript',
    className: 'javascript logo',
    content: '어떠한 클릭, 스크롤, 입력에 대한 동적인 기능을 만들 수 있으며, fetch를 사용하여 api를 불러올 수 있습니다.',
    imageUrl: JsLogo,
  },
  {
    id: 3,
    title: 'react',
    className: 'react logo',
    content: 'JavaScript기반인 React는 현재 javascript와 병행하여 공부하고 있으며, Router와 외부API를 활용한 SPA을 제작할 수 있습니다. 그 중  CSS-in-JS인 styled-component를 많이 사용합니다.',
    imageUrl: ReactLogo,
  },
  {
    id: 4,
    title: 'typescript',
    className: 'typescript logo',
    content: '현재 javascript와 병행하며 공부 중 입니다.',
    imageUrl: TsLogo,
  }
];
export default ProfileData;