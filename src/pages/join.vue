<template>
  <!-- 회원가입 -->
  <div id="join">
    <div class="title">회원가입</div>
    <div class="container">
      <section class="join-input">
        <dl class="join-list join-id">
          <dt class="join-list-title">아이디<em>*</em></dt>
          <dd class="join-list-contents display-flex justify-content-space-between align-items-center">
            <div class="input-box">
              <input type="text" placeholder="아이디를 입력해주세요" class="common-input">
            </div>
            <div class="ml8 btn-box">
              <button class="common-btn">중복확인</button>
            </div>
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">비밀번호<em>*</em></dt>
          <dd class="join-list-contents">
            <input type="text" placeholder="비밀번호를 입력해주세요" class="common-input">
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">비밀번호확인<em>*</em></dt>
          <dd class="join-list-contents">
            <input type="text" placeholder="비밀번호를 한번 더 입력해주세요" class="common-input">
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">이름<em>*</em></dt>
          <dd class="join-list-contents">
            <input type="text" placeholder="이름을 입력해 주세요" class="common-input">
          </dd>
        </dl>
        <dl class="join-list join-email">
          <dt class="join-list-title">이메일<em>*</em></dt>
          <dd class="join-list-contents display-flex">
            <div class="input-box">
              <input type="text" placeholder="예: marketkurly@kurly.com" class="common-input">
            </div>
            <div class="btn-box ml8">
              <button class="common-btn">중복확인</button>
            </div>
          </dd>
        </dl>
        <dl class="join-list join-phone">
          <dt class="join-list-title">휴대폰<em>*</em></dt>
          <dd class="join-list-contents display-flex">
            <div class="input-box">
              <input type="text" placeholder="숫자만 입력해주세요" class="common-input">
            </div>
            <div class="btn-box ml8">
              <button class="common-btn common-btn-disabled">인증번호 받기</button>
            </div>
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">주소<em>*</em></dt>
          <dd class="join-list-contents">
            <div class="common-input display-flex">
              <input type="text" placeholder="숫자만 입력해주세요">
              <button class="" title="검색">
                <img src="" alt="">
              </button>
            </div>
            <p class="mt10 font12">배송지에 따라 상품정보가 달라질 수 있습니다.</p>
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">생년월일</dt>
          <dd class="join-list-contents ">
            <div class="display-flex">
              <input type="text" placeholder="YYYY">
              <input type="text" placeholder="MM">
              <input type="text" placeholder="DD">
            </div>

          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">성별</dt>
          <dd class="join-list-contents">
            <label for="">
              <input type="radio" value="" name="join-radio-sex">
              <span>남자</span>
            </label>
            <label for="">
              <input type="radio" value="" name="join-radio-sex">
              <span>여자</span>
            </label>
            <label for="">
              <input type="radio" value="" name="join-radio-sex">
              <span>선택안함</span>
            </label>
          </dd>
        </dl>
        <dl class="join-list">
          <dt class="join-list-title">추가입력 사항</dt>
          <dd class="join-list-contents">
            <ul>
              <li>
                <label for="">
                  <input type="radio" value="" name="join-extra-input">
                  <span>추천인 아이디</span>
                </label>
              </li>
              <li>
                <label for="">
                  <input type="radio" value="" name="join-extra-input">
                  <span>참여 이벤트명</span>
                </label>
              </li>
            </ul>
            <input type="text" placeholder="추천인 아이디를 입력해주세요" class="common-input">
          </dd>
        </dl>
      </section>

      <section class="join-agree">
        <p class="join-agree-title">이용약관동의<em>*</em></p>
        <div class="join-agree-all">
          <label for="">
            <input type="checkbox" class="common-checkbox">
            <span>전체 동의합니다.</span>
          </label>
          <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
        </div>

        <div class="join-agree-checkbox">
          <ul class="join-agree-checkbox-box">
            <li class="join-agree-checkbox-list display-flex justify-content-space-between">
              <label for="">
                <input type="checkbox" class="common-checkbox">
                <span class="common-black">이용약관 동의 <span class="pl-5 light-gray">(필수)</span></span>
              </label>
              <p>
                <img src="" alt="">
              </p>
            </li>
            <li class="join-agree-checkbox-list display-flex justify-content-space-between">
              <label for="">
                <input type="checkbox" class="common-checkbox">
                <span class="common-black">개인정보 수집∙이용동의<span class="pl-5 light-gray">(필수)</span></span>
              </label>
              <p>
                <img src="" alt="">
              </p>
            </li>
            <li class="join-agree-checkbox-list display-flex justify-content-space-between">
              <label for="">
                <input type="checkbox" class="common-checkbox">
                <span class="common-black">개인정보 수집∙이용동의<span class="pl-5 light-gray">(필수)</span></span>
              </label>
              <p>
                <img src="" alt="">
              </p>
            </li>
            <li class="join-agree-checkbox-list display-flex justify-content-space-between">
              <label for="">
                <input type="checkbox" class="common-checkbox">
                <span class="common-black">개인정보 수집∙이용동의<span class="pl-5 light-gray">(선택)</span></span>
              </label>
              <p>
                <img src="" alt="">
              </p>
            </li>
            <li class="join-agree-checkbox-list">
              <label for="">
                <input type="checkbox" class="common-checkbox">
                <span class="common-black">무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span class="pl-5 light-gray">(선택)</span></span>
              </label>
              <ul class="display-flex">
                <li>
                  <label for="">
                    <input type="checkbox" class="common-checkbox">
                    <span class="common-black">SMS</span>
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" class="common-checkbox">
                    <span class="common-black">이메일</span>
                  </label>
                </li>
                <li>
                  <label for="">
                    <input type="checkbox" class="common-checkbox">
                    <span class="common-black">본인은 만 14세 이상입니다<span class="pl-5 light-gray">(필수)</span></span>
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section class="mt20 display-flex justify-content-center">
        <button class="common-btn-dark">가입하기</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "join"
}
</script>

<style>
  /* 회원가입 */
  .join-list {
    width:100%;
    margin-top:18px;
  }
  .join-list:first-child {
    margin-top:0;
  }
  .join-list-title {
    color: rgb(51, 51, 51);
    font-weight: 500;
    line-height: 20px;
  }
  .join-list-title em {
    color: rgb(238, 106, 123);
  }
  .join-list-contents {
    width:100%;
    margin-top:7px;
  }
  .join-id .btn-box {
    width:85px;
  }
  .join-id .input-box {
    flex: 1 1 0%;
  }

  .join-email .btn-box{
    width:85px;
  }

  .join-email .input-box {
    flex: 1 1 0%;
  }

  .join-phone .input-box {
    flex: 1 1 0%;
  }

  .join-phone .btn-box {
    width: 122px;
  }
</style>
