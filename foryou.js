const wrapper=document.querySelector('.wrapper');
		const question=document.querySelector('.question');
		const yesBtn=document.querySelector('.yes-btn');
		const noBtn=document.querySelector('.no-btn');

		const wrapperRech=wrapper.getBoundingClientRect();
		const noBtnRech=noBtn.getBoundingClientRect();

		yesBtn.addEventListener('click',()=>{
			question.innerHTML='Thank You 10$ :)';
		});
		noBtn.addEventListener('mouseover',()=>{
			const i=Math.floor(Math.random()*(wrapperRech.width-noBtnRech.width))
			+1;
			const j=Math.floor(Math.random()*(wrapperRech.height-noBtnRech.height))
			+1;
			noBtn.style.left=i+'px';
			noBtn.style.top=j+'px';
		});