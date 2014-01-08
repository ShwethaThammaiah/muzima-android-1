package com.muzima.view.preferences;

import android.content.Intent;
import android.os.CountDownTimer;
import com.muzima.MuzimaApplication;
import com.muzima.service.TimeoutPreferenceService;
import com.muzima.view.login.LoginActivity;

public class MuzimaTimer extends CountDownTimer {

    private MuzimaApplication muzimaApplication;
    private static MuzimaTimer muzimaTimer;

    private MuzimaTimer(long millisInFuture, long countDownInterval, MuzimaApplication muzimaApplication) {
        super(millisInFuture, countDownInterval);
        this.muzimaApplication = muzimaApplication;
    }

    public static MuzimaTimer getTimer(MuzimaApplication muzimaApplication) {
        if (muzimaTimer == null) {
            int timeout = new TimeoutPreferenceService(muzimaApplication).getTimeout();
            muzimaTimer = new MuzimaTimer(getTimeInMillis(timeout) , getTimeInMillis(timeout), muzimaApplication);
        }
        return muzimaTimer;
    }


    public MuzimaTimer resetTimer(int timeOutInMin) {
        muzimaTimer.cancel();
        muzimaTimer = new MuzimaTimer(getTimeInMillis(timeOutInMin), getTimeInMillis(timeOutInMin), muzimaApplication);
        muzimaTimer.start();
        return muzimaTimer;
    }

    @Override
    public void onTick(long l) {
    }


    @Override
    public void onFinish() {
        logOut();
    }

    public void restart() {
        this.cancel();
        this.start();
    }

    private void logOut() {
        muzimaApplication.logOut();
        launchLoginActivity();
    }

    private void launchLoginActivity() {
        Intent intent = new Intent(muzimaApplication, LoginActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra(LoginActivity.isFirstLaunch, false);
        intent.putExtra(LoginActivity.sessionTimeOut, true);
        muzimaApplication.startActivity(intent);
    }

    private static long getTimeInMillis(int timeOutInMin) {
        return timeOutInMin * 60 * 1000;
    }
}