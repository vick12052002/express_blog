const LOTTERY_URL = 'http://lottery.alirong.tw';
const lotteryController = {
  lottery: (req, res) => {
    res.render('lottery');
  },
  addLottery: (req, res) => {
    res.render('add_lottery');
  },
  editLottery: (req, res) => {
    res.render('update_lottery');
  },
  getLottery: (req, res) => {
    const requestURL = `${LOTTERY_URL}/get-lottery`;

    fetch(requestURL, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        if (response.ok) {
          const price = response.json();
          return res.render('get_lottery', { price });
        }
      })
      .catch((err) => {
        console.log(err);
        return cb('錯誤');
      });
  },
  handlesAddLottery: (req, res,) => {
    const { name, description, img, weight } = req.body;
  },
  handleUpdateLottery: (req, res) => {
    const priceId = req.params.id;
    const { name, description, img, weight } = req.body;
    Lottery.findOne({
      where: {
        id: priceId,
      },
    })
      .then((price) => {
        price.update({
          name,
          description,
          img_url: img,
          weight,
        });
      })
      .then(() => {
        console.log('更新成功!');
      })
      .catch((err) => {
        console.log(err.toString());
        req.flash('errorMessage', '獎項更新失敗');
      })
      .finally(() => {
        res.redirect('/');
      });
  },
};

module.exports = lotteryController;
