import './estilo.css'
import Link from 'next/link'


function index() {
    return (
        <>
            <section>
                <nav>
                    <ul>
                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                            <path d="M5.5 3.05421C5.01935 3.05421 4.54948 3.19602 4.14984 3.4617C3.75019 3.72739 3.4387 4.10502 3.25476 4.54683C3.07082 4.98865 3.02269 5.47481 3.11646 5.94384C3.21023 6.41287 3.44169 6.8437 3.78157 7.18185C4.12144 7.52001 4.55447 7.75029 5.02589 7.84359C5.4973 7.93688 5.98594 7.889 6.43001 7.70599C6.87408 7.52299 7.25363 7.21308 7.52066 6.81545C7.7877 6.41783 7.93023 5.95035 7.93023 5.47213C7.93023 4.83086 7.67419 4.21585 7.21843 3.7624C6.76268 3.30896 6.14454 3.05421 5.5 3.05421ZM5.5 7.12649C5.17113 7.12649 4.84965 7.02947 4.5762 6.84768C4.30276 6.6659 4.08963 6.40752 3.96378 6.10523C3.83793 5.80293 3.805 5.47029 3.86916 5.14938C3.93332 4.82846 4.09168 4.53368 4.32423 4.30232C4.55678 4.07095 4.85306 3.91339 5.17561 3.84955C5.49816 3.78572 5.83249 3.81848 6.13632 3.9437C6.44016 4.06891 6.69985 4.28095 6.88256 4.55301C7.06527 4.82507 7.16279 5.14493 7.16279 5.47213C7.16279 5.91089 6.9876 6.33169 6.67577 6.64194C6.36394 6.95219 5.941 7.12649 5.5 7.12649ZM5.5 0C4.04183 0.00168402 2.64387 0.578751 1.61278 1.60461C0.581699 2.63047 0.0016926 4.02135 0 5.47213C0 7.43891 0.917093 9.52787 2.65215 11.5131C3.43527 12.4135 4.31664 13.2245 5.28 13.931C5.34449 13.9759 5.42129 14 5.5 14C5.57871 14 5.65551 13.9759 5.72 13.931C6.68336 13.2245 7.56473 12.4135 8.34785 11.5131C10.0829 9.52787 11 7.44082 11 5.47213C10.9983 4.02135 10.4183 2.63047 9.38722 1.60461C8.35613 0.578751 6.95817 0.00168402 5.5 0ZM5.5 13.1401C4.5407 12.4033 0.767442 9.26571 0.767442 5.47213C0.767442 4.22334 1.26605 3.02569 2.15358 2.14266C3.0411 1.25963 4.24485 0.763553 5.5 0.763553C6.75515 0.763553 7.9589 1.25963 8.84642 2.14266C9.73395 3.02569 10.2326 4.22334 10.2326 5.47213C10.2326 9.26571 6.4593 12.4033 5.5 13.1401Z" fill="white" />
                        </svg></span><Link href="/guinchos">guinchos</Link></a></li>
                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                            <path d="M17.8169 7.45904C17.7689 7.49472 17.7142 7.52067 17.6559 7.53543C17.5977 7.55018 17.5371 7.55345 17.4777 7.54504C17.4182 7.53663 17.3609 7.51671 17.3092 7.48642C17.2575 7.45613 17.2123 7.41605 17.1763 7.36849C16.7944 6.86057 16.2973 6.44847 15.725 6.16536C15.1527 5.88226 14.5212 5.73606 13.8814 5.73855C13.76 5.73855 13.6436 5.69084 13.5578 5.60594C13.4719 5.52103 13.4237 5.40586 13.4237 5.28579C13.4237 5.16571 13.4719 5.05054 13.5578 4.96563C13.6436 4.88073 13.76 4.83302 13.8814 4.83302C14.2522 4.83294 14.6157 4.72997 14.9303 4.53579C15.245 4.3416 15.4984 4.064 15.6616 3.73451C15.8248 3.40502 15.8914 3.03685 15.8537 2.67181C15.8161 2.30677 15.6757 1.9595 15.4485 1.66944C15.2214 1.37937 14.9166 1.15814 14.5687 1.03088C14.2209 0.903611 13.8439 0.875408 13.4807 0.949473C13.1174 1.02354 12.7824 1.1969 12.5138 1.44987C12.2451 1.70284 12.0536 2.02528 11.9608 2.38057C11.9305 2.49684 11.8547 2.59643 11.7502 2.65743C11.6456 2.71842 11.5208 2.73582 11.4033 2.7058C11.2858 2.67578 11.1851 2.6008 11.1235 2.49735C11.0618 2.3939 11.0442 2.27046 11.0746 2.15418C11.1896 1.71156 11.4099 1.30255 11.7171 0.961238C12.0243 0.619931 12.4095 0.356217 12.8406 0.192076C13.2718 0.0279354 13.7363 -0.0318764 14.1955 0.0176255C14.6547 0.0671274 15.0953 0.224509 15.4806 0.476653C15.8659 0.728797 16.1846 1.0684 16.4104 1.46715C16.6361 1.86591 16.7622 2.31226 16.7781 2.76901C16.7941 3.22576 16.6995 3.67967 16.5023 4.09292C16.305 4.50616 16.0107 4.86677 15.644 5.14467C16.5464 5.47784 17.3326 6.0613 17.9085 6.82517C17.9445 6.87274 17.9708 6.92687 17.9857 6.98446C18.0006 7.04206 18.0039 7.102 17.9954 7.16086C17.9869 7.21972 17.9668 7.27635 17.9361 7.32751C17.9055 7.37867 17.865 7.42337 17.8169 7.45904ZM13.667 12.3036C13.6971 12.3551 13.7167 12.4119 13.7246 12.4709C13.7325 12.5298 13.7286 12.5898 13.7131 12.6472C13.6976 12.7047 13.6708 12.7586 13.6342 12.8058C13.5977 12.853 13.552 12.8926 13.5 12.9224C13.4306 12.9626 13.3516 12.9837 13.2712 12.9835C13.1908 12.9835 13.1118 12.9626 13.0422 12.9229C12.9726 12.8832 12.9148 12.826 12.8746 12.7571C12.4768 12.0903 11.9101 11.5377 11.2305 11.1538C10.5509 10.7699 9.78183 10.5679 8.99924 10.5679C8.21664 10.5679 7.44758 10.7699 6.76797 11.1538C6.08835 11.5377 5.52168 12.0903 5.1239 12.7571C5.09529 12.8112 5.05591 12.859 5.00814 12.8977C4.96037 12.9364 4.90518 12.9651 4.84591 12.9821C4.78663 12.9991 4.72449 13.0041 4.66322 12.9967C4.60195 12.9893 4.54282 12.9698 4.48939 12.9392C4.43595 12.9087 4.38932 12.8677 4.35229 12.8189C4.31526 12.77 4.2886 12.7143 4.27391 12.655C4.25923 12.5956 4.25683 12.534 4.26684 12.4738C4.27686 12.4135 4.29909 12.3559 4.3322 12.3043C4.95552 11.2448 5.93147 10.4323 7.09322 10.0058C6.45861 9.59816 5.97421 8.99845 5.71227 8.29613C5.45034 7.59382 5.42491 6.82655 5.63977 6.10877C5.85464 5.39099 6.29829 4.76116 6.90454 4.31324C7.5108 3.86533 8.24717 3.62332 9.00381 3.62332C9.76046 3.62332 10.4968 3.86533 11.1031 4.31324C11.7093 4.76116 12.153 5.39099 12.3679 6.10877C12.5827 6.82655 12.5573 7.59382 12.2954 8.29613C12.0334 8.99845 11.549 9.59816 10.9144 10.0058C12.0729 10.4338 13.0457 11.2458 13.667 12.3036ZM9 9.66248C9.51289 9.66248 10.0143 9.51201 10.4407 9.23009C10.8672 8.94817 11.1995 8.54747 11.3958 8.07866C11.5921 7.60985 11.6435 7.09399 11.5434 6.5963C11.4433 6.09861 11.1964 5.64146 10.8337 5.28264C10.471 4.92383 10.0089 4.67948 9.50591 4.58048C9.00288 4.48148 8.48147 4.53229 8.00762 4.72648C7.53377 4.92067 7.12876 5.24951 6.84382 5.67143C6.55887 6.09335 6.40678 6.58939 6.40678 7.09683C6.40678 7.77728 6.67999 8.42987 7.16632 8.91102C7.65264 9.39217 8.31223 9.66248 9 9.66248ZM4.57627 5.28579C4.57627 5.16571 4.52806 5.05054 4.44223 4.96563C4.35641 4.88073 4.24001 4.83302 4.11864 4.83302C3.74781 4.83291 3.38443 4.72992 3.06978 4.53575C2.75514 4.34158 2.50182 4.06401 2.33861 3.73456C2.1754 3.40511 2.10882 3.03698 2.14645 2.67198C2.18408 2.30698 2.3244 1.95973 2.55148 1.66967C2.77856 1.3796 3.0833 1.15834 3.43109 1.03102C3.77888 0.903696 4.15579 0.875407 4.51901 0.949365C4.88224 1.02332 5.21722 1.19657 5.48593 1.44942C5.75464 1.70227 5.9463 2.0246 6.03915 2.37981C6.05418 2.43739 6.08052 2.49147 6.11667 2.53897C6.15282 2.58648 6.19807 2.62647 6.24984 2.65667C6.30161 2.68687 6.35889 2.70669 6.41841 2.71499C6.47792 2.72329 6.5385 2.71991 6.59669 2.70504C6.65489 2.69018 6.70955 2.66412 6.75757 2.62836C6.80558 2.59259 6.846 2.54782 6.87653 2.4966C6.90706 2.44537 6.92708 2.3887 6.93547 2.32982C6.94386 2.27094 6.94045 2.211 6.92542 2.15343C6.81039 1.7108 6.59009 1.30179 6.28289 0.960484C5.97568 0.619177 5.59046 0.355462 5.15935 0.191322C4.72824 0.0271809 4.26371 -0.0326312 3.80449 0.0168707C3.34528 0.0663726 2.90467 0.223754 2.5194 0.475898C2.13413 0.728042 1.81535 1.06764 1.58965 1.4664C1.36394 1.86515 1.23784 2.3115 1.22185 2.76825C1.20586 3.225 1.30046 3.67892 1.49774 4.09216C1.69503 4.50541 1.9893 4.86601 2.35602 5.14392C1.45351 5.47729 0.667289 6.06102 0.0915254 6.82517C0.0554676 6.87274 0.0292323 6.92687 0.0143175 6.98446C-0.000597326 7.04206 -0.00389952 7.102 0.0045994 7.16086C0.0130983 7.21972 0.033232 7.27635 0.0638507 7.32751C0.0944695 7.37867 0.134974 7.42337 0.183051 7.45904C0.231128 7.49472 0.285837 7.52067 0.344053 7.53543C0.402269 7.55018 0.462853 7.55345 0.522345 7.54504C0.581838 7.53663 0.639074 7.51671 0.690785 7.48642C0.742497 7.45613 0.787671 7.41605 0.823729 7.36849C1.20562 6.86057 1.70273 6.44847 2.27502 6.16536C2.84732 5.88226 3.47881 5.73606 4.11864 5.73855C4.24001 5.73855 4.35641 5.69084 4.44223 5.60594C4.52806 5.52103 4.57627 5.40586 4.57627 5.28579Z" fill="white" />

                        </svg></span><Link href="/clientes">clientes</Link></a></li>

                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                            <path d="M18.9654 4.73779L17.8383 1.96391C17.7552 1.75757 17.611 1.58065 17.4243 1.45624C17.2376 1.33182 17.0171 1.26569 16.7917 1.26648H13.8475V0.475523C13.8475 0.349406 13.7966 0.228455 13.706 0.139277C13.6154 0.0500995 13.4925 0 13.3644 0H1.12712C0.828188 0 0.541501 0.116899 0.330125 0.32498C0.11875 0.533062 0 0.815281 0 1.10955V9.98597C0 10.2802 0.11875 10.5625 0.330125 10.7705C0.541501 10.9786 0.828188 11.0955 1.12712 11.0955H2.62458C2.73544 11.633 3.03166 12.1162 3.46303 12.4633C3.8944 12.8104 4.4344 13 4.99153 13C5.54866 13 6.08865 12.8104 6.52002 12.4633C6.95139 12.1162 7.24761 11.633 7.35848 11.0955H11.6415C11.7524 11.633 12.0486 12.1162 12.48 12.4633C12.9113 12.8104 13.4513 13 14.0085 13C14.5656 13 15.1056 12.8104 15.537 12.4633C15.9683 12.1162 16.2646 11.633 16.3754 11.0955H17.8729C18.1718 11.0955 18.4585 10.9786 18.6699 10.7705C18.8813 10.5625 19 10.2802 19 9.98597V4.91373C18.9999 4.85346 18.9881 4.79375 18.9654 4.73779ZM13.8475 2.21911H16.7925C16.8247 2.21907 16.8562 2.22858 16.8829 2.24638C16.9096 2.26419 16.9303 2.28947 16.9422 2.31896L17.8036 4.43821H13.8475V2.21911ZM0.966102 1.10955C0.966102 1.06751 0.983066 1.0272 1.01326 0.997471C1.04346 0.967745 1.08441 0.951045 1.12712 0.951045H12.8814V6.3403H0.966102V1.10955ZM4.99153 12.0466C4.70491 12.0466 4.42473 11.9629 4.18642 11.8062C3.94811 11.6494 3.76237 11.4266 3.65268 11.1659C3.543 10.9053 3.5143 10.6184 3.57022 10.3417C3.62613 10.065 3.76415 9.81078 3.96682 9.61127C4.16949 9.41176 4.4277 9.27589 4.70881 9.22085C4.98992 9.1658 5.28129 9.19405 5.54609 9.30203C5.81089 9.41 6.03722 9.59285 6.19645 9.82745C6.35569 10.062 6.44068 10.3379 6.44068 10.62C6.44068 10.9984 6.288 11.3612 6.01623 11.6287C5.74446 11.8963 5.37586 12.0466 4.99153 12.0466ZM11.6415 10.1445H7.35848C7.24761 9.607 6.95139 9.12378 6.52002 8.7767C6.08865 8.42961 5.54866 8.24001 4.99153 8.24001C4.4344 8.24001 3.8944 8.42961 3.46303 8.7767C3.03166 9.12378 2.73544 9.607 2.62458 10.1445H1.12712C1.08441 10.1445 1.04346 10.1278 1.01326 10.0981C0.983066 10.0683 0.966102 10.028 0.966102 9.98597V7.29135H12.8814V8.51819C12.5657 8.6826 12.2909 8.91364 12.0766 9.19479C11.8623 9.47593 11.7137 9.80023 11.6415 10.1445ZM14.0085 12.0466C13.7219 12.0466 13.4417 11.9629 13.2034 11.8062C12.9651 11.6494 12.7793 11.4266 12.6696 11.1659C12.5599 10.9053 12.5313 10.6184 12.5872 10.3417C12.6431 10.065 12.7811 9.81078 12.9838 9.61127C13.1864 9.41176 13.4447 9.27589 13.7258 9.22085C14.0069 9.1658 14.2982 9.19405 14.563 9.30203C14.8278 9.41 15.0542 9.59285 15.2134 9.82745C15.3726 10.062 15.4576 10.3379 15.4576 10.62C15.4576 10.9984 15.3049 11.3612 15.0332 11.6287C14.7614 11.8963 14.3928 12.0466 14.0085 12.0466ZM18.0339 9.98597C18.0339 10.028 18.0169 10.0683 17.9867 10.0981C17.9565 10.1278 17.9156 10.1445 17.8729 10.1445H16.3754C16.2634 9.60778 15.9667 9.12554 15.5356 8.77905C15.1044 8.43256 14.5651 8.24302 14.0085 8.24239C13.9545 8.24239 13.9006 8.24239 13.8475 8.24794V5.38926H18.0339V9.98597Z" fill="white" />
                        </svg></span><Link href="/veiculos">veículos</Link></a></li>
                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303287 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67878 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C13.9978 5.14415 13.2596 3.36494 11.9473 2.05266C10.6351 0.740377 8.85585 0.0021795 7 0ZM7 13.1765C5.77841 13.1765 4.58425 12.8142 3.56854 12.1355C2.55282 11.4569 1.76117 10.4922 1.29369 9.36363C0.826206 8.23503 0.703891 6.99315 0.942211 5.79503C1.18053 4.59691 1.76878 3.49637 2.63258 2.63258C3.49637 1.76878 4.59691 1.18053 5.79503 0.942208C6.99315 0.703888 8.23503 0.826203 9.36363 1.29368C10.4922 1.76117 11.4569 2.55282 12.1355 3.56854C12.8142 4.58425 13.1765 5.77841 13.1765 7C13.1747 8.63754 12.5233 10.2075 11.3654 11.3654C10.2075 12.5233 8.63754 13.1747 7 13.1765ZM6.58824 7.54902V3.70588C6.58824 3.59667 6.63162 3.49194 6.70884 3.41472C6.78606 3.3375 6.89079 3.29412 7 3.29412C7.10921 3.29412 7.21394 3.3375 7.29116 3.41472C7.36838 3.49194 7.41177 3.59667 7.41177 3.70588V7.54902C7.41177 7.65822 7.36838 7.76296 7.29116 7.84018C7.21394 7.9174 7.10921 7.96078 7 7.96078C6.89079 7.96078 6.78606 7.9174 6.70884 7.84018C6.63162 7.76296 6.58824 7.65822 6.58824 7.54902ZM7.68628 10.0196C7.68628 10.1553 7.64603 10.288 7.57062 10.4009C7.49521 10.5137 7.38803 10.6017 7.26263 10.6536C7.13723 10.7056 6.99924 10.7192 6.86612 10.6927C6.73299 10.6662 6.61071 10.6009 6.51473 10.5049C6.41875 10.4089 6.35339 10.2866 6.32691 10.1535C6.30043 10.0204 6.31402 9.88238 6.36597 9.75698C6.41791 9.63158 6.50587 9.5244 6.61873 9.44899C6.73159 9.37358 6.86427 9.33333 7 9.33333C7.18201 9.33333 7.35657 9.40563 7.48527 9.53434C7.61397 9.66304 7.68628 9.83759 7.68628 10.0196Z" fill="white" />
                        </svg></span><Link href="/ocorrencias">ocorrências</Link></a></li>
                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                            <path d="M8.82872 7.96971C9.2469 7.63822 9.55418 7.1795 9.70738 6.658C9.86059 6.1365 9.85202 5.57843 9.68288 5.06223C9.51374 4.54603 9.19253 4.09764 8.76439 3.78007C8.33625 3.4625 7.8227 3.29172 7.29592 3.29172C6.76913 3.29172 6.25559 3.4625 5.82745 3.78007C5.39931 4.09764 5.0781 4.54603 4.90896 5.06223C4.73982 5.57843 4.73125 6.1365 4.88446 6.658C5.03766 7.1795 5.34494 7.63822 5.76311 7.96971C4.97847 8.27291 4.29482 8.8035 3.79388 9.49804C3.73055 9.5854 3.70336 9.69522 3.71829 9.80333C3.73321 9.91144 3.78903 10.009 3.87347 10.0745C3.95791 10.14 4.06404 10.1682 4.16852 10.1527C4.27301 10.1373 4.36729 10.0795 4.43061 9.99216C4.76423 9.5319 5.19683 9.15834 5.69416 8.90104C6.19149 8.64375 6.73989 8.5098 7.29592 8.5098C7.85195 8.5098 8.40034 8.64375 8.89767 8.90104C9.395 9.15834 9.82761 9.5319 10.1612 9.99216C10.2246 10.0795 10.3188 10.1373 10.4233 10.1527C10.5278 10.1682 10.6339 10.14 10.7184 10.0745C10.8028 10.009 10.8586 9.91144 10.8736 9.80333C10.8885 9.69522 10.8613 9.5854 10.798 9.49804C10.297 8.8035 9.61336 8.27291 8.82872 7.96971ZM5.57143 5.90196C5.57143 5.54906 5.67257 5.20408 5.86206 4.91065C6.05155 4.61722 6.32088 4.38852 6.63598 4.25347C6.95109 4.11842 7.29783 4.08308 7.63235 4.15193C7.96687 4.22078 8.27414 4.39072 8.51532 4.64026C8.75649 4.8898 8.92073 5.20774 8.98727 5.55386C9.05381 5.89998 9.01966 6.25875 8.88914 6.58479C8.75862 6.91083 8.53758 7.1895 8.25399 7.38556C7.9704 7.58163 7.63699 7.68628 7.29592 7.68628C6.83855 7.68628 6.39992 7.49829 6.07652 7.16366C5.75312 6.82904 5.57143 6.37519 5.57143 5.90196ZM12.0714 0H2.52041C2.27414 0 2.03795 0.101225 1.86381 0.281407C1.68967 0.461589 1.59184 0.705968 1.59184 0.960784V2.7451H0.397959C0.292414 2.7451 0.191191 2.78848 0.116559 2.8657C0.0419277 2.94292 0 3.04766 0 3.15686C0 3.26607 0.0419277 3.3708 0.116559 3.44802C0.191191 3.52525 0.292414 3.56863 0.397959 3.56863H1.59184V6.58824H0.397959C0.292414 6.58824 0.191191 6.63162 0.116559 6.70884C0.0419277 6.78606 0 6.89079 0 7C0 7.10921 0.0419277 7.21394 0.116559 7.29116C0.191191 7.36838 0.292414 7.41177 0.397959 7.41177H1.59184V10.4314H0.397959C0.292414 10.4314 0.191191 10.4748 0.116559 10.552C0.0419277 10.6292 0 10.7339 0 10.8431C0 10.9523 0.0419277 11.0571 0.116559 11.1343C0.191191 11.2115 0.292414 11.2549 0.397959 11.2549H1.59184V13.0392C1.59184 13.294 1.68967 13.5384 1.86381 13.7186C2.03795 13.8988 2.27414 14 2.52041 14H12.0714C12.3177 14 12.5539 13.8988 12.728 13.7186C12.9022 13.5384 13 13.294 13 13.0392V0.960784C13 0.705968 12.9022 0.461589 12.728 0.281407C12.5539 0.101225 12.3177 0 12.0714 0ZM12.2041 13.0392C12.2041 13.0756 12.1901 13.1105 12.1652 13.1363C12.1404 13.162 12.1066 13.1765 12.0714 13.1765H2.52041C2.48523 13.1765 2.45149 13.162 2.42661 13.1363C2.40173 13.1105 2.38775 13.0756 2.38775 13.0392V0.960784C2.38775 0.924382 2.40173 0.889471 2.42661 0.86373C2.45149 0.83799 2.48523 0.823529 2.52041 0.823529H12.0714C12.1066 0.823529 12.1404 0.83799 12.1652 0.86373C12.1901 0.889471 12.2041 0.924382 12.2041 0.960784V13.0392Z" fill="white" />
                        </svg></span><Link href="/prestador">prestadores de serviços</Link></a></li>
                        <li><a><span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M14.7795 3.08689L14.3448 2.84095C14.4105 2.58579 14.4105 2.31861 14.3448 2.06345L14.7795 1.81751C14.8807 1.76013 14.9546 1.66558 14.9849 1.55467C15.0152 1.44376 14.9994 1.32557 14.941 1.2261C14.8826 1.12663 14.7863 1.05404 14.6734 1.02428C14.5605 0.994522 14.4402 1.01004 14.3389 1.06743L13.9035 1.31481C13.7117 1.13156 13.4766 0.997976 13.2192 0.926066V0.432741C13.2192 0.317971 13.1728 0.207902 13.0902 0.126747C13.0076 0.0455922 12.8955 0 12.7787 0C12.6619 0 12.5498 0.0455922 12.4672 0.126747C12.3846 0.207902 12.3381 0.317971 12.3381 0.432741V0.926066C12.0808 0.997976 11.8456 1.13156 11.6538 1.31481L11.2184 1.06743C11.1172 1.01004 10.9969 0.994522 10.8839 1.02428C10.771 1.05404 10.6748 1.12663 10.6164 1.2261C10.5579 1.32557 10.5421 1.44376 10.5724 1.55467C10.6027 1.66558 10.6766 1.76013 10.7779 1.81751L11.2126 2.06345C11.1469 2.31861 11.1469 2.58579 11.2126 2.84095L10.7779 3.08689C10.6766 3.14427 10.6027 3.23882 10.5724 3.34973C10.5421 3.46064 10.5579 3.57883 10.6164 3.6783C10.6748 3.77777 10.771 3.85037 10.8839 3.88012C10.9969 3.90988 11.1172 3.89436 11.2184 3.83697L11.6538 3.58959C11.8456 3.77284 12.0808 3.90643 12.3381 3.97833V4.47166C12.3381 4.58643 12.3846 4.6965 12.4672 4.77765C12.5498 4.85881 12.6619 4.9044 12.7787 4.9044C12.8955 4.9044 13.0076 4.85881 13.0902 4.77765C13.1728 4.6965 13.2192 4.58643 13.2192 4.47166V3.97833C13.4766 3.90643 13.7117 3.77284 13.9035 3.58959L14.3389 3.83697C14.4402 3.89436 14.5605 3.90988 14.6734 3.88012C14.7863 3.85037 14.8826 3.77777 14.941 3.6783C14.9994 3.57883 15.0152 3.46064 14.9849 3.34973C14.9546 3.23882 14.8807 3.14427 14.7795 3.08689ZM12.7787 3.17344C12.6335 3.17344 12.4915 3.13114 12.3708 3.05189C12.25 2.97264 12.1559 2.85999 12.1003 2.72821C12.0448 2.59642 12.0302 2.4514 12.0586 2.31149C12.0869 2.17159 12.1568 2.04308 12.2595 1.94221C12.3622 1.84134 12.493 1.77265 12.6354 1.74482C12.7779 1.71699 12.9255 1.73128 13.0597 1.78587C13.1938 1.84045 13.3085 1.9329 13.3892 2.0515C13.4699 2.17011 13.5129 2.30955 13.5129 2.4522C13.5129 2.64348 13.4356 2.82693 13.2979 2.96219C13.1602 3.09745 12.9734 3.17344 12.7787 3.17344ZM14.3705 6.06415C14.2553 6.08321 14.1526 6.14642 14.0849 6.23988C14.0171 6.33333 13.9899 6.44938 14.0093 6.56252C14.0698 6.92032 14.1002 7.2824 14.1003 7.6451C14.1016 9.29831 13.4581 10.8892 12.3022 12.0908C11.61 11.0336 10.5753 10.2363 9.36523 9.82755C9.96865 9.43276 10.4267 8.85771 10.6717 8.18743C10.9167 7.51715 10.9356 6.78722 10.7257 6.10556C10.5157 5.42389 10.0881 4.82669 9.50589 4.40223C8.92371 3.97778 8.21794 3.74861 7.49293 3.74861C6.76791 3.74861 6.06214 3.97778 5.47997 4.40223C4.89779 4.82669 4.47011 5.42389 4.26016 6.10556C4.05021 6.78722 4.06913 7.51715 4.31413 8.18743C4.55914 8.85771 5.01721 9.43276 5.62063 9.82755C4.41051 10.2363 3.37587 11.0336 2.68368 12.0908C1.79916 11.1688 1.2088 10.0126 0.985487 8.76481C0.76217 7.51705 0.91566 6.23237 1.42701 5.0693C1.93837 3.90624 2.78521 2.9157 3.86303 2.21993C4.94084 1.52415 6.20247 1.15359 7.49219 1.15398C7.86119 1.15408 8.22955 1.18399 8.59355 1.24341C8.65109 1.25406 8.71021 1.25334 8.76746 1.24129C8.82471 1.22924 8.87894 1.2061 8.92698 1.17322C8.97503 1.14035 9.01591 1.09839 9.04726 1.04981C9.0786 1.00123 9.09977 0.947004 9.10953 0.890294C9.11929 0.833585 9.11745 0.775533 9.1041 0.719532C9.09076 0.663531 9.06618 0.610705 9.03181 0.564142C8.99744 0.517579 8.95397 0.478212 8.90393 0.448344C8.8539 0.418476 8.7983 0.398706 8.74039 0.390188C7.49497 0.18289 6.21639 0.288399 5.02362 0.696898C3.83086 1.1054 2.76266 1.80361 1.91841 2.72659C1.07415 3.64956 0.481279 4.76731 0.194944 5.97582C-0.0913903 7.18434 -0.0618828 8.44437 0.280722 9.63868C0.623326 10.833 1.2679 11.9228 2.15446 12.8066C3.04103 13.6905 4.14078 14.3397 5.35141 14.6939C6.56203 15.0481 7.8442 15.0958 9.0786 14.8324C10.313 14.5691 11.4596 14.0033 12.4116 13.1878C12.4593 13.2859 12.5349 13.1878 12.5834 13.0356C13.4945 12.2062 14.1812 11.1671 14.5817 10.0121C14.9823 8.85705 15.084 7.62228 14.8779 6.419C14.8585 6.30587 14.7941 6.20494 14.699 6.1384C14.6038 6.07186 14.4857 6.04515 14.3705 6.06415ZM4.99579 7.06811C4.99579 6.58311 5.1422 6.109 5.41651 5.70574C5.69082 5.30247 6.08071 4.98817 6.53686 4.80257C6.99302 4.61697 7.49496 4.56841 7.97922 4.66302C8.46347 4.75764 8.90829 4.99119 9.25742 5.33414C9.60654 5.67709 9.8443 6.11403 9.94063 6.58971C10.037 7.06539 9.98751 7.55844 9.79857 8.00652C9.60962 8.4546 9.28965 8.83759 8.87912 9.10704C8.46859 9.37649 7.98594 9.52031 7.49219 9.52031C6.83011 9.52031 6.19514 9.26195 5.72697 8.80207C5.25881 8.3422 4.99579 7.71847 4.99579 7.06811ZM3.33936 12.6937C3.7702 11.99 4.37905 11.4077 5.10674 11.0035C5.83443 10.5993 6.6562 10.3868 7.49219 10.3868C8.32819 10.3868 9.14996 10.5993 9.87765 11.0035C10.6053 11.4077 11.2142 11.99 11.645 12.6937C10.4705 13.6293 9.00433 14.1398 7.49219 14.1398C5.98006 14.1398 4.51387 13.6293 3.33936 12.6937Z" fill="white" />
                        </svg></span>minha conta</a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default index;