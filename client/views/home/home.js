Template.home.helpers({

});

Template.home.events({

});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });

  $('#bracket_container').bracket(
  {
      teams:11,
      topOffset:50,
      height:'700px',
      scale:0.65,
      icons:true,
      teamNames:
      [
          {
              name:'Illinois',
              seed:'6'
          },
          {
              name:'Iowa',
              seed:'11'
          },
          {
              name:'Indiana',
              seed:'5'
          },
          {
              name:'Penn State',
              seed:'4'
          },
          {
              name:'Michigan State',
              seed:'1'
          },
          {
              name:'Michigan',
              seed:'10'
          },
          {
              name:'Ohio State',
              seed:'7'
          },
          {
              name:'Wisconsin',
              seed:'9'
          },
          {
              name:'Minnesota',
              seed:'8'
          },
          {
              name:'Northwestern',
              seed:'3'
          },
          {
              name:'Purdue',
              seed:'2'
          }
      ]
  })

};
